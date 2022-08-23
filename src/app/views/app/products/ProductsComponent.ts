import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { categories } from './data/categories.data';
import { Subscription } from 'rxjs';
import { ProductsService } from './services/products.service';
import { Product } from './interfaces/products.interfaces';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  filter:string;

  categories = categories;

  CategoryCarousel: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    navText:['<i class="feather icon-arrow-left-circle"></i>','<i class="feather icon-arrow-right-circle"></i>'],
    responsive: {
      0: {
        items: 4
      },
      600: {
        items: 6
      },
      1000: {
        items: 7
      }
    }
  };

  $subscribe: Subscription;

  products:Product[];

  constructor(private readonly _activateRoute: ActivatedRoute, private readonly _productsService:ProductsService) {
    this._activateRoute.queryParams.subscribe(({category})=>{
      this.filter=category;
    })
  }


  async ngOnInit() {
   this.products = await this._productsService.getAllProducts(30,0);
  }

  ngOnDestroy(): void {
   this.$subscribe.unsubscribe();
  }
}
