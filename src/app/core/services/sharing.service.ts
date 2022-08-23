import { Injectable } from '@angular/core';
import { User } from '@shared/interfaces/user.interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  private _sharingObservable: BehaviorSubject<User> =
  new BehaviorSubject<User>({
    _id:'',
    email:'',
    fullName:'',
    isActive:true,
    points:0,
    roles:[],
  });

  constructor() { }

  get sharingDataUser() {
    return this._sharingObservable.asObservable();
  }

  set sharingDataUserData(data:User) {
      this._sharingObservable.next(data);
  }
}
