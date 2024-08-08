export interface IData<T> {
  status: 200 | 500;
  data: T;
}
