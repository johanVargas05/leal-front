export interface ILocalStorage {
  set<T>(key:string, data:T): boolean;
  get<T>(key:string,type:T): T;
  remove(key:string): boolean;
  removeAll(): boolean;
}
