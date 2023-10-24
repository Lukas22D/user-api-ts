export interface HttpResponse<T> {
  statusCode: number;
  body: T | unknown | string;
}
