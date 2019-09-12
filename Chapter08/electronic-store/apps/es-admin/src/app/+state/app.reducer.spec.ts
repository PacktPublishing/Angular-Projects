import { AppLoaded } from './app.actions';
import { AppState, Entity, initialState, appReducer } from './app.reducer';

describe('App Reducer', () => {
  const getAppId = it => it['id'];
  let createApp;

  beforeEach(() => {
    createApp = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid App actions ', () => {
    it('should return set the list of known App', () => {
      const apps = [createApp('PRODUCT-AAA'), createApp('PRODUCT-zzz')];
      const action = new AppLoaded(apps);
      const result: AppState = appReducer(initialState, action);
      const selId: string = getAppId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = appReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
