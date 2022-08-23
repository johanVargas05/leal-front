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

  private _sharingPoints: BehaviorSubject<{points:number}> =
  new BehaviorSubject<{points:number}>({points:0});

  constructor() { }

  get sharingDataUser() {
    return this._sharingObservable.asObservable();
  }

  set sharingDataUserData(data:User) {
      this._sharingObservable.next(data);
  }

  get sharingPointsUser() {
    return this._sharingPoints.asObservable();
  }

  set sharingPointsUserData(data:{points:number}) {
      this._sharingPoints.next(data);
  }

}
