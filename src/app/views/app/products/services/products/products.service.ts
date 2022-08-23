import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment';
import { Product } from '../../interfaces/products.interfaces';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private readonly _http:HttpClient) { }

  async getAllProducts(limit:number, offset:number) {
      const $observable = this._http.get<Product[]>(`${environment.urlServer}products?limit=${limit}&offset=${offset}`);
      return await lastValueFrom($observable);
  }

  async getProductsByCategory(limit:number, offset:number, category:string) {
      const $observable = this._http.get<Product[]>(`${environment.urlServer}products/category/${category}?limit=${limit}&offset=${offset}`);
      return await lastValueFrom($observable);

  }
}
