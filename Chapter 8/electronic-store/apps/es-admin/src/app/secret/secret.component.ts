import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { ProductsState } from '../+state/products/products.reducer';
import { productsQuery } from '../+state/products/products.selectors';
import { LoadProducts } from '../+state/products/products.actions';

@Component({
  selector: 'es-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss']
})
export class SecretComponent implements OnInit {
  products;
  view;
  constructor(private http: HttpClient, private store: Store<ProductsState>) {
    this.store.dispatch(new LoadProducts());
    this.store.select(productsQuery.getAllProducts).subscribe(products => {
      this.products = products.map((item: any) => ({
        name: item.name,
        series: item.sales.map(sale => ({
          name: sale.month,
          value: sale.sold,
        })),
      }));
    });
  }

  ngOnInit() {
  }

}
