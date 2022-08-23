import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../interfaces/products.interfaces';
import { PointsService } from '../../services/points/points.service';
import { PointsAction } from '../../interfaces/points.interfaces';
import { environment } from '@environment';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  @Input() product:Product={
    _id: '',
    brand: '',
    category: '',
    description: '',
    discountPercentage: 0,
    images: [
      '',
    ],
    price: 0,
    rating: 0,
    stock: 0,
    thumbnail: '',
    title: ''
  };
  @Input() action:'deposit' | 'egress';
  loading = false;

  constructor(
    private _modalActive: NgbActiveModal,
    private _pointsService:PointsService,
    ) { }

  ngOnInit(): void {
  }

  async realizarDeposito() {
    this.loading=true;
    const createAt = new Date();
    const points = this.point;
    const description = `Compra de ${this.product.title}`;
    const data:PointsAction={
      action:'deposit',
      createAt,
      description,
      points
    };
      await this._pointsService.crearDeposito(data);
      this.loading = false;
      this.close();
  }

  async redimirCoins() {
    this.loading=true;
    const createAt = new Date();
    const points = this.point;
    const description = `Redimidos por ${this.product.title}`;
    const data:PointsAction={
      action:'egress',
      createAt,
      description,
      points
    };
      await this._pointsService.redimirPoints(data);
      this.loading = false;
      this.close();
  }

  close() {
    this._modalActive.close(false);
  }

  get point() {
    return this.product.price * environment.valuePoint;
  }
}
