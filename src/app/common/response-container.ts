export interface Response<T> {
  code: number;
  data?: T;
}

export enum ResponseCode{
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  NOT_ACCEPTABLE = 406,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500
}
