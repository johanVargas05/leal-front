import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

import  LST  from '@shared/utils/local-storage';
import { environment } from '@environment';
import { Title } from '@angular/platform-browser';
import { AuthService } from '@views/auth/services/auth.service';
import { ValidRoles } from '../interfaces/valid-roles.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _router: Router,
    private readonly _authService: AuthService,
    private _title: Title ){}

  async canActivate(
    router: ActivatedRouteSnapshot):Promise<boolean>  {

      try {
        const token = LST.get<{token:string}>(environment.tokenKey,{token:''});
        const {roles} = LST.get<{roles:ValidRoles[]}>(environment.userData,{roles:[]});

        if(!token) return false;

        this._title.setTitle(`Leal Coins | ${router.data.name}`);

        if(router.data.validRole && !this._authService.validationRoles(roles,router.data.role)) {
          // TODO: ENviar a pagina error 401
          this._router.navigateByUrl('errors/not-authorized');
          return false;
        };


        if(!await this._authService.refreshToken()){
          this._authService.signOut();
          return  false;
        }
        return true;

      } catch (error) {
        this._authService.signOut();
        return false;
      }
  }

}
