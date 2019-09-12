import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { bindNodeCallback, of, Observable } from 'rxjs';
import { map, catchError,  } from 'rxjs/operators';

import { AuthPartialState, AUTH_FEATURE_KEY, AuthState } from './auth.reducer';
import {
  Login,
  LoginSuccess,
  LoginFailure,
  AuthActionTypes,
  HandleLoginCallback
} from './auth.actions';
import { Router } from '@angular/router';
import { State, Store } from '@ngrx/store';

@Injectable()
export class AuthEffects {
  onAuthSuccessUrl = '/';
  onAuthFailureUrl = '/';

  @Effect() login$ = this.dataPersistence.fetch(AuthActionTypes.Login, {
    run: (action: Login, state: AuthPartialState) => {
      state[AUTH_FEATURE_KEY].auth.authorize();
    },
    onError: (err) => {
      console.error(err);
    }
  });

  @Effect() handleLoginCallback$ = this.dataPersistence.fetch(AuthActionTypes.HandleLoginCallback, {
    run: (action: HandleLoginCallback, state: AuthPartialState) => {
      return this.loginObservable$(state).pipe(
        map(token => {
          this.router.navigate([this.onAuthSuccessUrl]);
          return new LoginSuccess();
        }),
        catchError(() => {
          return of(new LoginFailure());
        })
      );
    },
    onError: () => {}
  });

  @Effect() logout$ = this.dataPersistence.fetch(AuthActionTypes.Logout, {
    run: () => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('exp');
      this.router.navigate(['home']);
    },
    onError: () => {}
  });

  constructor(
    private router: Router,
    private actions$: Actions,
    private dataPersistence: DataPersistence<AuthPartialState>,
    private store: Store<AuthState>,
  ) {}
  parseHash$ = (state: any) => bindNodeCallback(state[AUTH_FEATURE_KEY].auth.parseHash.bind(state[AUTH_FEATURE_KEY].auth));

  loginObservable$ = (state) => Observable.create((observer) => {
    if (window.location.hash && !state[AUTH_FEATURE_KEY].authenticated) {
      this.parseHash$(state)().subscribe({
        next: (authResult: any) => {
          localStorage.setItem('access_token', authResult.idToken);
          localStorage.setItem('exp', authResult.idTokenPayload.exp);
          observer.next();
        },
        error: err => {
          console.error('Error', err);
          observer.error(err);
        }
      });
    }
  })
}
