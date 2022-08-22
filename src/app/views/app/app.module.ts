import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class AppModule { }
