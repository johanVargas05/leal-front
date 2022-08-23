import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { PointsAction, PointsResponse } from '../../interfaces/points.interfaces';
import { lastValueFrom } from 'rxjs';
import { SharingService } from '@core/services/sharing.service';

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  constructor(private readonly _http:HttpClient, private _sharingService:SharingService) { }

  async crearDeposito(data:PointsAction) {
    const {id} = JSON.parse(localStorage.getItem(environment.userData) ||'');
    const observable$ = this._http.post<PointsResponse>(`${environment.urlServer}wallet/${id}`,data);
    await lastValueFrom(observable$);
    await this.leerPoints();
  }

  async redimirPoints(data:PointsAction) {
    const {id} = JSON.parse(localStorage.getItem(environment.userData) ||'');
    const observable$ = this._http.patch<PointsResponse>(`${environment.urlServer}wallet/${id}`,data);
    await lastValueFrom(observable$);
    await this.leerPoints();
  }

  async leerPoints() {
    const {id} = JSON.parse(localStorage.getItem(environment.userData) ||'');
    const observable$ = this._http.get<{points:number}>(`${environment.urlServer}wallet/points/${id}`);
    const result= await lastValueFrom(observable$);
    this._sharingService.sharingPointsUserData = result;
  }

}
