import { Action } from '@ngrx/store';
import { Entity } from './products.reducer';

export enum ProductsActionTypes {
  LoadProducts = '[Products] Load Products',
  ProductsLoaded = '[Products] Products Loaded',
  ProductsLoadError = '[Products] Products Load Error'
}

export class LoadProducts implements Action {
  readonly type = ProductsActionTypes.LoadProducts;
}

export class ProductsLoadError implements Action {
  readonly type = ProductsActionTypes.ProductsLoadError;
  constructor(public payload: any) {}
}

export class ProductsLoaded implements Action {
  readonly type = ProductsActionTypes.ProductsLoaded;
  constructor(public payload: Entity[]) {}
}

export type ProductsAction = LoadProducts | ProductsLoaded | ProductsLoadError;

export const fromProductsActions = {
  LoadProducts,
  ProductsLoaded,
  ProductsLoadError
};
