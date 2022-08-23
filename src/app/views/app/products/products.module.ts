import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductComponent } from './components/product/product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';



@NgModule({
  declarations: [ProductComponent, ListProductComponent, ProductComponent, DetailProductComponent],
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule
  ],
  exports: [ListProductComponent]
})
export class ProductsModule { }
