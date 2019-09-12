import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PRODUCTS_FEATURE_KEY, ProductsState } from './products.reducer';

// Lookup the 'Products' feature state managed by NgRx
const getProductsState = createFeatureSelector<ProductsState>(
  PRODUCTS_FEATURE_KEY
);

const getLoaded = createSelector(
  getProductsState,
  (state: ProductsState) => state.loaded
);
const getError = createSelector(
  getProductsState,
  (state: ProductsState) => state.error
);

const getAllProducts = createSelector(
  getProductsState,
  getLoaded,
  (state: ProductsState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getProductsState,
  (state: ProductsState) => state.selectedId
);
const getSelectedProducts = createSelector(
  getAllProducts,
  getSelectedId,
  (products, id) => {
    const result = products.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const productsQuery = {
  getLoaded,
  getError,
  getAllProducts,
  getSelectedProducts
};
