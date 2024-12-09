export type TAPIResponse<T> = {
  code: number;
  data: T;
  message: string;
};
