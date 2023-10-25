export interface HttpResponse<T> {
  statusCode: number;
  body: T | unknown | string;
}

export interface HttpRequest<B> {
  params?: B;
  headers?: B;
  body?: B;
}
