export interface CustomResponse<T> {
    status: number;
    statusText: string;
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
    data: T;
    headers: Record<string, string>;
}
