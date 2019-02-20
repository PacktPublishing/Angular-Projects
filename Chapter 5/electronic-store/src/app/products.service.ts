import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const PRODUCTS_API = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    console.log('wow');
    return this.http.get(PRODUCTS_API);
  }

}
