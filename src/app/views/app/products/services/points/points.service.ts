import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { PointsAction, PointsResponse } from '../../interfaces/points.interfaces';
import { lastValueFrom } from 'rxjs';
import { SharingService } from '@core/services/sharing.service';
import { MessageToastService } from '@shared/servers/message-toast/message-toast.service';

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  constructor(
    private readonly _http:HttpClient,
    private _sharingService:SharingService,
    private readonly _messageService: MessageToastService) { }

  async crearDeposito(data:PointsAction) {
    const {id} = JSON.parse(localStorage.getItem(environment.userData) ||'');
    const observable$ = this._http.post<PointsResponse>(`${environment.urlServer}wallet/${id}`,data);
    await lastValueFrom(observable$);
    await this.leerPoints();
    this._messageService.alertMessage('Leal Coins', `Felicitaciones acabas de ganar ${data.points} leal coins!`, 'success');
  }

  async redimirPoints(data:PointsAction) {
    const {id} = JSON.parse(localStorage.getItem(environment.userData) ||'');
    const observable$ = this._http.patch<PointsResponse>(`${environment.urlServer}wallet/${id}`,data);
   try {
    await lastValueFrom(observable$);
    } catch (error:any) {
    if(error.status==400) return this._messageService.alertMessage('Leal Coins', `Oops! No puedes redimir más puntos de los que tienes disponibles, tienes una diferencia de ${error.error.points}`, 'error');
    }
    await this.leerPoints();
    this._messageService.alertMessage('Leal Coins', `Felicitaciones acabas de redimir ${data.points} leal coins!`, 'success');
  }

  async leerPoints() {
    const {id} = JSON.parse(localStorage.getItem(environment.userData) ||'');
    const observable$ = this._http.get<{points:number}>(`${environment.urlServer}wallet/points/${id}`);
    const result= await lastValueFrom(observable$);
    this._sharingService.sharingPointsUserData = result;
  }

}
