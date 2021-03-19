import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'es-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  @Input() count = 0;
  @Output() updateCount = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.count++;
    this.updateCount.emit(this.count);
  }

  remove() {
    this.count--;
    this.updateCount.emit(this.count);
  }


}
