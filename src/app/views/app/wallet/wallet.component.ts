import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharingService } from '@core/services/sharing.service';
import { Observable, Subscription } from 'rxjs';
import { WalletHistory } from './interfaces/wallet.interfaces';
import { WalletService } from './services/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  data$:Observable<{points:number}>;
  $subscribe: Subscription;
  limit = 10;
  offset = 1;
  showVerMas = true;
  loading = false;
  filter:'deposit' | 'egress' |null = null;
  history:WalletHistory[];


  constructor(sharingService:SharingService,_activateRoute: ActivatedRoute,private _walletService:WalletService ) {
    this.data$ = sharingService.sharingPointsUser;
    this.$subscribe = _activateRoute.queryParams.subscribe(async({filter})=>{
      this.filter = filter;
      this.offset = 1;
      this.history = await this.getData();
    })
  }

  filters= [
    {
      title:'Todos los movimientos',
      icon:'mdi-history'
    },
    {
      title:'Obtenidos',
      icon:'mdi-cash-multiple',
      query:'deposit'
    },
    {
      title:'Utilizados',
      icon:'mdi-wallet',
      query:'egress'
    },
  ]



  ngOnInit(): void {
  }

  async verMas() {
    this.loading=true;
    this.offset++;
    const historyNew = await this.getData();
    this.history.push(...historyNew);
    this.loading=false;
  }

  async getData() {
    let data:WalletHistory[];
    if(this.filter){
       data = await this._walletService.getAllHistorial(this.limit,this.offset,this.filter);
    }else {
      data = await this._walletService.getAllHistorial(this.limit,this.offset);
    }
    (data.length<this.limit)?this.showVerMas = false:this.showVerMas = true;
    return data;
  }

}
