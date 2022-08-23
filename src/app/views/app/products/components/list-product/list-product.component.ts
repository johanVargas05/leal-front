import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@environment';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { categories } from '../../data/categories.data';
import { Product } from '../../interfaces/products.interfaces';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit, OnDestroy{

  filter:string;

  categories = categories;

  CategoryCarousel: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    navText:['<i class="feather icon-arrow-left-circle"></i>','<i class="feather icon-arrow-right-circle"></i>'],
    responsive: {
      0:   {
        items: 1
      },
      380:   {
        items: 2
      },
      540: {
        items: 3
      },
      720: {
        items: 4
      },
      960: {
        items: 4
      },
      1450: {
        items: 6
      }
    }
  };

  $subscribe: Subscription;

  products:Product[];

  limit = 12;
  offset = 1;
  showVerMas = true;

  cargandoData = false;

  constructor(_activateRoute: ActivatedRoute, private readonly _productsService:ProductsService) {
   this.$subscribe = _activateRoute.queryParams.subscribe(async({category})=>{
      this.filter = category;
      this.offset = 1;
      this.products = await this.getData();
    })
  }


  async ngOnInit() {

  }

  async verMas() {
    this.cargandoData=true;
    this.offset++;
    const productsNew = await this.getData();
    this.products.push(...productsNew);
    this.cargandoData=false;
  }


  async getData() {
    let data:Product[];
    if(this.filter){
       data = await this._productsService.getProductsByCategory(this.limit,this.offset,this.filter);
    }else {
      data = await this._productsService.getAllProducts(this.limit,this.offset);
    }
    (data.length<this.limit)?this.showVerMas = false:this.showVerMas = true;
    return data;
  }

  get themeDark() {
    const theme = localStorage.getItem(environment.theme) as 'theme-dark' | 'theme-light' | null;
    if(theme== 'theme-dark') return true;
    return false;
  }


  ngOnDestroy(): void {
   this.$subscribe.unsubscribe();
  }

}
