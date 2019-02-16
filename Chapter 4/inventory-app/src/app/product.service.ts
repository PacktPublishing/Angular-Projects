import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IProduct {
    id: number;
    name: string;
    active: boolean;
    expirationDate: string;
    description: string;
    type: string;
    features?: string[];
}

function generateId() {
    return Math.floor(Math.random() * 1000);
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    products: IProduct[] = [{
      id: generateId(),
      name: 'IPhone X',
      active: false,
      description: 'Like Brand New',
      expirationDate: '01/15/2019',
      type: 'mobile'
    }, {
      id: generateId(),
      name: 'IPhone XR',
      active: true,
      description: 'Like Brand New',
      expirationDate: '01/14/2019',
      type: 'mobile'
    }, {
      id: generateId(),
      name: 'Samsung S9',
      active: true,
      description: 'Like Brand New',
      expirationDate: '01/13/2019',
      type: 'mobile'
    }, {
      id: generateId(),
      name: 'Samsung Note 8',
      active: true,
      description: 'Like Brand New',
      expirationDate: '01/12/2019',
      type: 'mobile'
    }, {
      id: generateId(),
      name: 'LG Phone',
      active: false,
      description: 'Like Brand New',
      expirationDate: '01/11/2019',
      type: 'mobile'
    }, {
      id: generateId(),
      name: 'IPad Pro',
      active: true,
      description: 'Like Brand New',
      expirationDate: '01/10/2019',
      type: 'tablet'
    }, {
      id: generateId(),
      name: 'Macbook Pro',
      active: false,
      description: 'Like Brand New',
      expirationDate: '01/9/2019',
      type: 'computer'
    }, {
      id: generateId(),
      name: 'HP Thinkbook',
      active: false,
      description: 'Like Brand New',
      expirationDate: '01/8/2019',
      type: 'computer'
    }, {
      id: generateId(),
      name: 'Dell Inspiron',
      active: false,
      description: 'Like Brand New',
      expirationDate: '01/7/2019',
      type: 'computer'
    }, {
      id: generateId(),
      name: 'Dell Flat',
      active: false,
      description: 'Like Brand New',
      expirationDate: '01/6/2019',
      type: 'computer'
    }, {
      id: generateId(),
      name: 'IPhone 6S',
      active: false,
      description: 'Like Brand New',
      expirationDate: '01/5/2019',
      type: 'mobile'
    }];

    products$ = new BehaviorSubject<IProduct[]>(this.products);

    removeProduct(product) {
      const index = this.products.indexOf(product);
      this.products = [
          ...this.products.slice(0, index),
          ...this.products.slice(index + 1),
      ];
      this.products$.next(this.products);
  }

  addProduct(product) {
    this.products = [
        {
            id: generateId(),
            ...product,
        },
        ...this.products,
    ];
    this.products$.next(this.products);
}

editProduct(id, product) {
    const index = this.products.findIndex(p => p.id === id);
    this.products = [
        ...this.products.slice(0, index),
        {
            id,
            ...product,
        },
        ...this.products.slice(index + 1),
    ];
    this.products$.next(this.products);
}
}
