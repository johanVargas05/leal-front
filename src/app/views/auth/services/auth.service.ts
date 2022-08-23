import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '@environment';
import { lastValueFrom } from 'rxjs';
import { RefreshTokenResponse } from '../interfaces/auth.interfaces';
import { ValidRoles } from '@shared/interfaces/valid-roles.interfaces';
import { ModoDarkService } from '../../../shared/servers/modo-dark/modo-dark.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly _http: HttpClient,private readonly _router: Router, private _modoDarkService:ModoDarkService) { }

  async refreshToken() {
    const $observable = this._http.get<RefreshTokenResponse>(`${environment.urlServer}auth/refresh-token`);

    try {
      const { token } = await lastValueFrom($observable);
      localStorage.setItem(environment.tokenKey,token);
      return true;
    } catch (error) {
      return false;
    }
  }

  signOut() {
    localStorage.clear();
    this._modoDarkService.changeMode(false);
    this._router.navigateByUrl('auth/login');
  }

  validationRoles(roles:ValidRoles[],role:ValidRoles| ValidRoles[]){
    if(role === undefined)return false;
    if(typeof role === 'string')return roles.includes(role);
    for (let i = 0; i < role.length; i++) {
      const element = role[i];
      if(roles.includes(element)){
        return true;
      }
    }
    return false;
  }
}
