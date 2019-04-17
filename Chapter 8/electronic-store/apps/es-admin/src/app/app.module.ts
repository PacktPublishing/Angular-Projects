import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@ngprojects/shared';
import { AuthModule } from '@ngprojects/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StoreModule, ActionReducer, State } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  APP_FEATURE_KEY,
  initialState as appInitialState,
  appReducer
} from './+state/app.reducer';
import { AppEffects } from './+state/app.effects';
import { NxModule } from '@nrwl/nx';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { AuthGuard } from './auth.guard';
import {
  PRODUCTS_FEATURE_KEY,
  initialState as productsInitialState,
  productsReducer
} from './+state/products/products.reducer';
import { ProductsEffects } from './+state/products/products.effects';

export function logger(reducer: ActionReducer<any>): any {
  // default, no options
  return storeLogger()(reducer);
}

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: 'home' },
        { path: 'home', loadChildren: './home/home.module#HomeModule' },
        {
          path: 'secret',
          loadChildren: './secret/secret.module#SecretModule',
          canActivate: [AuthGuard]
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    SharedModule,
    HttpClientModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
      { app: appReducer, products: productsReducer },
      {
        initialState: { app: appInitialState, products: productsInitialState },
        metaReducers: !environment.production ? [storeFreeze, logger] : []
      }
    ),
    EffectsModule.forRoot([AppEffects, ProductsEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule,
    AuthModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
