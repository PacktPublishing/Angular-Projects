import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { ProductsEffects } from './products.effects';
import { LoadProducts, ProductsLoaded } from './products.actions';

describe('ProductsEffects', () => {
  let actions: Observable<any>;
  let effects: ProductsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        ProductsEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(ProductsEffects);
  });

  describe('loadProducts$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadProducts() });
      expect(effects.loadProducts$).toBeObservable(
        hot('-a-|', { a: new ProductsLoaded([]) })
      );
    });
  });
});
