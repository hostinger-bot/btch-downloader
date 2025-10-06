"use strict";

import { fetch } from 'undici';

export interface CustomResponse<T> {
  data: T;
}

export interface HttpClientConfig {
  baseUrl: string;
  version: string;
  timeout?: number;
  defaultHeaders?: Record<string, string>;
}

export interface HttpResponse<T> {
  status: number;
  statusText: string;
  data: T | null;
  headers: Record<string, string>;
}

export class HttpError extends Error {
  constructor(
    public status: number,
    message: string,
    public response?: HttpResponse<unknown>
  ) {
    super(message);
    this.name = 'HttpError';
  }
}

export async function HttpGet<T>(
  endpoint: string,
  url: string,
  version: string,
  timeout: number,
  baseUrl: string
): Promise<T | null> {
  try {
    const requestUrl = new URL(`${baseUrl}/${endpoint}`);
    requestUrl.searchParams.append('url', url);

    const headers = {
      'Content-Type': 'application/json',
      'User-Agent': `btch/${version}`,
      'X-Client-Version': version,
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(requestUrl, {
      method: 'GET',
      headers,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText || 'Unknown'}`);
    }

    const text = await response.text();
    return text ? (JSON.parse(text) as T) : null;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Unknown error occurred');
  }
}

export class HttpClient {
  private config: HttpClientConfig;

  constructor(config: HttpClientConfig) {
    this.config = {
      timeout: 60000,
      defaultHeaders: {
        'Content-Type': 'application/json',
        'User-Agent': `btch/${config.version}`,
        'X-Client-Version': config.version,
      },
      ...config,
    };
  }

  async get<T>(
    endpoint: string,
    queryParams: Record<string, string> = {},
    customHeaders: Record<string, string> = {}
  ): Promise<HttpResponse<T | null>> {
    try {
      const url = new URL(`${this.config.baseUrl}/${endpoint}`);
      Object.entries(queryParams).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });

      const headers = { ...this.config.defaultHeaders, ...customHeaders };
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);

      const response = await fetch(url, { method: 'GET', headers, signal: controller.signal });
      clearTimeout(timeoutId);

      const responseHeaders: Record<string, string> = {};
      response.headers.forEach((value, key) => (responseHeaders[key] = value));

      const text = await response.text();
      const data: T | null = text ? (JSON.parse(text) as T) : null;

      const httpResponse: HttpResponse<T | null> = {
        status: response.status,
        statusText: response.statusText || 'Unknown',
        data,
        headers: responseHeaders,
      };

      if (!response.ok) {
        throw new HttpError(response.status, response.statusText || 'Request failed', httpResponse);
      }

      return httpResponse;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async post<T, D = unknown>(
    endpoint: string,
    data: D,
    customHeaders: Record<string, string> = {}
  ): Promise<HttpResponse<T | null>> {
    try {
      const url = new URL(`${this.config.baseUrl}/${endpoint}`);
      const headers = { ...this.config.defaultHeaders, ...customHeaders };
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);

      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: data ? JSON.stringify(data) : undefined,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const responseHeaders: Record<string, string> = {};
      response.headers.forEach((value, key) => (responseHeaders[key] = value));

      const text = await response.text();
      const responseBody: T | null = text ? (JSON.parse(text) as T) : null;

      const httpResponse: HttpResponse<T | null> = {
        status: response.status,
        statusText: response.statusText || 'Unknown',
        data: responseBody,
        headers: responseHeaders,
      };

      if (!response.ok) {
        throw new HttpError(response.status, response.statusText || 'Request failed', httpResponse);
      }

      return httpResponse;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: unknown, status?: number): HttpError {
    if (error instanceof HttpError) return error;
    const message = error instanceof Error ? error.message : 'Unknown error occurred';
    return new HttpError(status || 500, message);
  }
}