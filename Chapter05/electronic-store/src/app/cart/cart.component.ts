import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'es-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart$;
  constructor(private cartService: CartService) {
    this.cart$ = this.cartService.cart$;
  }

  ngOnInit() {
  }

  getValues(obj) {
    return Object.values(obj).filter(x => typeof x === 'object');
  }


  onSelectionChange($event, product) {
    this.cartService.addToCart($event.value, product);
  }

}
