import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductsModule } from '../products/products.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    CarouselModule,
    ProductsModule
  ]
})
export class HomeModule { }
