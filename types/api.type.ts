export type TAPIResponse<T = unknown> = {
  code: number;
  data: T;
  message: string;
};
