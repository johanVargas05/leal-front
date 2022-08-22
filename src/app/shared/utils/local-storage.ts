import { ILocalStorage } from "@shared/interfaces/local-storage.interfaces";

class LocalStorageMethods implements ILocalStorage {

  set<T>(key:string,data:T):boolean {
    const datos = JSON.stringify(data || {});
    localStorage.setItem(key,datos);
    return true;
  }

  get<T>(key:string,type:T):T {
    const data = localStorage.getItem(key);
    if(typeof type =='object' && data){
      return JSON.parse(data) as T;
    }

    return type;
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
