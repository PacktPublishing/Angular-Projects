import { Entity, AppState } from './app.reducer';
import { appQuery } from './app.selectors';

describe('App Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getAppId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createApp = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      app: {
        list: [
          createApp('PRODUCT-AAA'),
          createApp('PRODUCT-BBB'),
          createApp('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('App Selectors', () => {
    it('getAllApp() should return the list of App', () => {
      const results = appQuery.getAllApp(storeState);
      const selId = getAppId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedApp() should return the selected Entity', () => {
      const result = appQuery.getSelectedApp(storeState);
      const selId = getAppId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = appQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = appQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
