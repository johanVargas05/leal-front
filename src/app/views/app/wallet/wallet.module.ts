import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MomentModule } from 'ngx-moment';

import { WalletComponent } from './wallet.component';

import { SharedModule } from '@shared/shared.module';
import { WalletRoutingModule } from './wallet-routing.module';



@NgModule({
  declarations: [WalletComponent],
  imports: [
    CommonModule,
    SharedModule,
    WalletRoutingModule,
    MomentModule
  ]
})
export class WalletModule { }
