import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { LoginData, LoginResponse } from '../interfaces/login.interfaces';
import { MessageToastService } from '@shared/servers/message-toast/message-toast.service';
import { environment } from '@environment';
import { Router } from '@angular/router';
import { SharingService } from '@core/services/sharing.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private readonly _http: HttpClient,
    private readonly _messageService: MessageToastService,
    private readonly _router:Router,
    private sharingService:SharingService
    ) { }

  async login(data:LoginData) {
    const $observable = this._http.post<LoginResponse>(`${environment.urlServer}auth/login`,data);
    try {
      const { user, token } = await lastValueFrom($observable);

      this.sharingService.sharingDataUserData = user;
      this.sharingService.sharingPointsUserData = {points:user.points};

      const data= JSON.stringify({id:user._id,roles:user.roles});
      localStorage.setItem(environment.userData,data);
      localStorage.setItem(environment.tokenKey,token);

      this._messageService.alertMessage('Leal Coins', 'Bienvenido disfrutar de la experiencia LEAL', 'success');
      this._router.navigateByUrl('app');

      return true;

    } catch (error:any) {
      if(error.status==401 || error.status==400) return this._messageService.alertMessage('Leal Coins', 'Oops! parece que tus credenciales son incorrectas vuelve a intentarlo', 'error');
      console.log(error);
      this._messageService.alertMessage('Leal Coins', 'Oops! algo salio mal vuelve a intentarlo', 'error');
      return false;
    }
  }
}
