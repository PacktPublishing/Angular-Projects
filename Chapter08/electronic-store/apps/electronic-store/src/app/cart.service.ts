import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: any = {};
  cart$;

  constructor() {
    this.cart.cartTotal = 0;
    this.cart$ = new BehaviorSubject(this.cart);
  }

  addToCart(count, product) {
    if (count === 0) {
      delete this.cart[product._id];
    } else {
      this.cart = {
        ...this.cart,
        [product._id]: {
          ...product,
          count,
        }
      };
    }
    this.cart.cartTotal = 0;
    Object.values(this.cart).filter(x => typeof x === 'object').forEach((p: any) => this.cart.cartTotal = this.cart.cartTotal + p.count);
    this.cart$.next(this.cart);
  }

}
