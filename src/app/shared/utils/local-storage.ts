import { ILocalStorage } from "@shared/interfaces/local-storage.interfaces";

class LocalStorageMethods implements ILocalStorage {

  set<T>(key:string,data:T):boolean {
    const datos = JSON.stringify(data);
    localStorage.setItem(key,datos);
    return true;
  }

  get<T>(key:string):T {
    return JSON.parse(localStorage.getItem(key) || "") as T;
  }

  remove(key: string): boolean {
    localStorage.removeItem(key);
    return true;
  }

  removeAll(): boolean {
    localStorage.clear();
    return true;
  }
}


export default new LocalStorageMethods();
