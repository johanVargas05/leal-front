import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { lastValueFrom } from 'rxjs';
import { WalletHistory } from '../interfaces/wallet.interfaces';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private readonly _http:HttpClient) { }

  async getAllHistorial(limit:number, offset:number,action:'deposit' | 'egress' |null = null) {
    const {id} = JSON.parse(localStorage.getItem(environment.userData) ||'');
    let url = `${environment.urlServer}wallet/history/${id}?limit=${limit}&offset=${offset}`;
    if(action) url += `&action=${action}`;

    const $observable = this._http.get<WalletHistory[]>(url);
    return await lastValueFrom($observable);
}
}
