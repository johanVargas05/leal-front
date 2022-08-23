import { Component, Input, OnInit } from '@angular/core';
import { environment } from '@environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../interfaces/products.interfaces';
import { DetailProductComponent } from '../detail-product/detail-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input()data:Product;
  constructor(private _modal: NgbModal) { }

  ngOnInit(): void {
  }

  get point() {
    return this.data.price * environment.valuePoint;
  }

  async redimirCoins() {
    const modalRef = this._modal.open(DetailProductComponent, { centered: true,scrollable:true });
    modalRef.componentInstance.product = this.data;
    modalRef.componentInstance.action = 'egress';

  }
  async ganarCoins() {
    const modalRef = this._modal.open(DetailProductComponent, { centered: true,scrollable:true });
    modalRef.componentInstance.product = this.data;
    modalRef.componentInstance.action = 'deposit';
  }

}
