import { ProductsAction, ProductsActionTypes } from './products.actions';

export const PRODUCTS_FEATURE_KEY = 'products';

/**
 * Interface for the 'Products' data used in
 *  - ProductsState, and
 *  - productsReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface ProductsState {
  list: Entity[]; // list of Products; analogous to a sql normalized table
  selectedId?: string | number; // which Products record has been selected
  loaded: boolean; // has the Products list been loaded
  error?: any; // last none error (if any)
}

export interface ProductsPartialState {
  readonly [PRODUCTS_FEATURE_KEY]: ProductsState;
}

export const initialState: ProductsState = {
  list: [],
  loaded: false
};

export function productsReducer(
  state: ProductsState = initialState,
  action: ProductsAction
): ProductsState {
  switch (action.type) {
    case ProductsActionTypes.ProductsLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
