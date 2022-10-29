import { Entity, ProductsState } from './products.reducer';
import { productsQuery } from './products.selectors';

describe('Products Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getProductsId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createProducts = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      products: {
        list: [
          createProducts('PRODUCT-AAA'),
          createProducts('PRODUCT-BBB'),
          createProducts('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Products Selectors', () => {
    it('getAllProducts() should return the list of Products', () => {
      const results = productsQuery.getAllProducts(storeState);
      const selId = getProductsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedProducts() should return the selected Entity', () => {
      const result = productsQuery.getSelectedProducts(storeState);
      const selId = getProductsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = productsQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = productsQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
