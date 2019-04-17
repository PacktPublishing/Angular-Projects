import { AuthAction, AuthActionTypes } from './auth.actions';
import * as auth0 from 'auth0-js';

export const AUTH_FEATURE_KEY = 'auth';

/**
 * Interface for the 'Auth' data used in
 *  - AuthState, and
 *  - authReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface AuthState {
  list: Entity[]; // list of Auth; analogous to a sql normalized table
  selectedId?: string | number; // which Auth record has been selected
  loaded: boolean; // has the Auth list been loaded
  error?: any; // last none error (if any)
  authenticated: boolean;
  auth?: any;
  loginInProgress: boolean;
  loginFailed: boolean;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

let authenticated = false;
if (localStorage.getItem('access_token')) {
  authenticated = true;
}

export const initialState: AuthState = {
  authenticated,
  list: [],
  loaded: false,
  loginInProgress: false,
  loginFailed: false,
};

export function authReducer(
  state: AuthState = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case AuthActionTypes.Login: {
      state = {
        ...state,
        loginInProgress: true,
      };
      break;
    }
    case AuthActionTypes.LoginFailure: {
      return {
        ...state,
        loginInProgress: false,
        loginFailed: true,
      };
      break;
    }

    case AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        loginInProgress: false,
        authenticated: true,
      };
      break;
    }
    case AuthActionTypes.RegisterApp: {
      const { clientId, callbackUrl, domain } = action.payload;
      const auth = new auth0.WebAuth({
        clientID: clientId,
        domain,
        responseType: 'token id_token',
        redirectUri: callbackUrl,
        scope: 'openid'
      });

      state = {
        ...state,
        auth,
      };
      return state;
    }
    case AuthActionTypes.Logout: {
      return {
        ...state,
        authenticated: false,
      };
      break;
    }
  }
  return state;
}
