# Custom HTTP Client

A TypeScript HTTP client built on Node.js's native `https` module. Provides both a lightweight function for quick GET requests (`HttpGet`) and a full-featured `HttpClient` class for structured GET and POST operations with advanced features including custom headers, timeout handling, and type safety.

## Features

- **HttpGet Function**  
  - Perform quick GET requests to any endpoint.  
  - Accepts parameters for API endpoint, URL, client version, timeout, and base URL.  
  - Automatically parses JSON responses.  
  - Throws errors for HTTP failures or invalid responses.

- **HttpClient Class**  
  - Professional HTTP client with GET and POST methods.  
  - Supports query parameters and custom headers.  
  - Configurable base URL, client version, timeout, and default headers.  
  - Automatic JSON response parsing.  
  - Comprehensive error handling using `HttpError`.  
  - Handles network errors, HTTP errors, and request timeouts gracefully.

- **Type Safety**  
  - TypeScript interfaces for request and response objects.  
  - Structured response types: `HttpResponse<T>` and `CustomResponse<T>`.  
  - Strongly typed error handling with `HttpError`.


## Usage

```ts
import { HttpClient, HttpGet } from './HttpClient';

const baseUrl = 'https://api.example.com';
const client = new HttpClient({ baseUrl, version: '1.0.0' });

// GET request with query parameters
const response = await client.get('endpoint', { param: 'value' });
console.log(response.data);

// POST request with JSON body
const postResponse = await client.post('endpoint', { key: 'value' });
console.log(postResponse.data);

// Quick GET using HttpGet
const data = await HttpGet('endpoint', 'https://example.com', '1.0.0', 60000, baseUrl);
console.log(data);
```

## Configuration Interfaces

* **HttpClientConfig**

  ```ts
  interface HttpClientConfig {
    baseUrl: string;
    version: string;
    timeout?: number;
    defaultHeaders?: Record<string, string>;
  }
  ```

* **HttpResponse<T>**

  ```ts
  interface HttpResponse<T> {
    status: number;
    statusText: string;
    data: T;
    headers: Record<string, string>;
  }
  ```

* **HttpError**

  ```ts
  class HttpError extends Error {
    status: number;
    response?: HttpResponse<unknown>;
  }
  ```

* **CustomResponse<T>**

  ```ts
  interface CustomResponse<T> {
    status: number;
    statusText: string;
    data: T;
  }
  ```

## Error Handling

* `HttpError` is thrown for any HTTP status outside 200–299.
* Network errors and timeouts are automatically caught and wrapped into `HttpError`.
* All methods ensure JSON parsing errors are handled gracefully.

## Example Workflow

1. Create an `HttpClient` instance with a base URL and version.
2. Perform GET requests with optional query parameters and custom headers.
3. Perform POST requests with JSON body data.
4. Catch `HttpError` for any failed requests and handle accordingly.

## License

MIT
