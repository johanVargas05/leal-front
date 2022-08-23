import { Component, Input, OnInit } from '@angular/core';
import { environment } from '@environment';
import { Product } from '../../interfaces/products.interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input()data:Product;
  constructor() { }

  ngOnInit(): void {
  }

  get point() {
    return this.data.price * environment.valuePoint;
  }

}
