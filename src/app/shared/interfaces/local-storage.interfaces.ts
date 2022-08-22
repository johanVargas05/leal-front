export interface ILocalStorage {
  set<T>(key:string, data:T): boolean;
  get<T>(key:string): T;
  remove(key:string): boolean;
  removeAll(): boolean;
}
