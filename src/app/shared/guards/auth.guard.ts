import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

import  LST  from '@shared/utils/local-storage';
import { environment } from '@environment';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _title: Title ){}

  async canActivate(
    router: ActivatedRouteSnapshot):Promise<boolean>  {

      const token = LST.get(environment.tokenKey);

      if(!token) {
      return false;
      }

      try {

        this._title.setTitle(`Leal Coins | ${router.data.name}`);
        return true;

      } catch (error) {
        return false;
      }
  }

}
