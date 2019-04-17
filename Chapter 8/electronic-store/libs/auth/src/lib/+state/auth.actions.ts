import { Action } from '@ngrx/store';
import { Entity } from './auth.reducer';

interface AppSecrets {
  clientId: string;
  callbackUrl: string;
  domain: string;
}

export enum AuthActionTypes {
  RegisterApp= '[Auth] Register App',
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Auth Login Failure',
  LoginInProgress = '[Auth] Login In Progress',
  HandleLoginCallback = '[Auth] Handle Login Callback',
  Logout = '[Auth] Logout',
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
}

export class LoginInProgress implements Action {
  readonly type = AuthActionTypes.LoginInProgress;
}

export class HandleLoginCallback implements Action {
  readonly type = AuthActionTypes.HandleLoginCallback;
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;
  constructor() {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor() {}
}

export class RegisterApp implements Action {
  readonly type = AuthActionTypes.RegisterApp;
  constructor(public payload: AppSecrets) { }
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export type AuthAction = Login | HandleLoginCallback | LoginInProgress | LoginSuccess | LoginFailure | RegisterApp | Logout;

export const fromAuthActions = {
  Login,
  LoginInProgress,
  LoginSuccess,
  LoginFailure,
  RegisterApp,
  HandleLoginCallback,
  Logout
};
