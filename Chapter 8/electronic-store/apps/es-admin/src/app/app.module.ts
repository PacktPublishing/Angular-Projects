import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@ngprojects/shared';
import { AuthModule } from '@ngprojects/auth';

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

export function logger(reducer: ActionReducer<any>): any {
  // default, no options
  return storeLogger()(reducer);
}


@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path: 'secret', loadChildren: './secret/secret.module#SecretModule' },
    ], { initialNavigation: 'enabled' }),
    SharedModule,
    HttpClientModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
      { app: appReducer },
      {
        initialState: { app: appInitialState },
        metaReducers: !environment.production ? [storeFreeze, logger] : []
      }
    ),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
