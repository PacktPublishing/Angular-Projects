import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { ProductsPartialState } from './products.reducer';
import {
  LoadProducts,
  ProductsLoaded,
  ProductsLoadError,
  ProductsActionTypes
} from './products.actions';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ProductsEffects {
  @Effect() loadProducts$ = this.dataPersistence.fetch(
    ProductsActionTypes.LoadProducts,
    {
      run: (action: LoadProducts, state: ProductsPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return this.http.get('/api/products/secure').pipe(
          map((res: any) => {
            return new ProductsLoaded(res);
          })
        );
      },

      onError: (action: LoadProducts, error) => {
        console.error('Error', error);
        return new ProductsLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ProductsPartialState>,
    private http: HttpClient
  ) {}
}
