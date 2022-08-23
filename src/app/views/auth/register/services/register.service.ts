import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import { Router } from '@angular/router';

import { RegisterData, RegisterResponse } from '../interfaces/register.interfaces';
import { MessageToastService } from '@shared/servers/message-toast/message-toast.service';
import { SharingService } from '@core/services/sharing.service';

import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private readonly _http: HttpClient,
    private readonly _messageService: MessageToastService,
    private readonly _router:Router,
    private sharingService:SharingService
    ) { }

  async register(data:RegisterData) {
    const $observable = this._http.post<RegisterResponse>(`${environment.urlServer}auth/register`,data).pipe(map(data=>{
      return data;
    }));
    try {
      const { user, token } = await lastValueFrom($observable);

      this.sharingService.sharingDataUserData = user;
      this.sharingService.sharingPointsUserData = {points:user.points};

      const data= JSON.stringify({id:user._id,roles:user.roles});
      localStorage.setItem(environment.userData,data);
      localStorage.setItem(environment.tokenKey,token);

      this._messageService.alertMessage('Leal Coins', 'Felicitaciones ya puedes disfrutar de la experiencia LEAL', 'success');
      this._router.navigateByUrl('app');

      return true;
    } catch (error:any) {
      if(error.status==400) return this._messageService.alertMessage('Leal Coins', 'Oops! parece que ya estas registrado, te invitamos a iniciar sesión', 'error');
      this._messageService.alertMessage('Leal Coins', 'Oops! algo salio mal vuelve a intentarlo', 'error');
      return false;
    }
  }
}
