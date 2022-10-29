import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, AuthState } from './auth.reducer';

// Lookup the 'Auth' feature state managed by NgRx
const getAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

const getLoaded = createSelector(
  getAuthState,
  (state: AuthState) => state.loaded
);
const getError = createSelector(
  getAuthState,
  (state: AuthState) => state.error
);

const getAllAuth = createSelector(
  getAuthState,
  getLoaded,
  (state: AuthState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getAuthState,
  (state: AuthState) => state.selectedId
);
const getSelectedAuth = createSelector(
  getAllAuth,
  getSelectedId,
  (auth, id) => {
    const result = auth.find((it: any) => it.id === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

const getAuthenticated = createSelector(
  getAuthState,
  (state: AuthState) => state.authenticated
);

export const authQuery = {
  getLoaded,
  getError,
  getAllAuth,
  getSelectedAuth,
  getAuthenticated
};
