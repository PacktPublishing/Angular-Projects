import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { authQuery } from '@ngprojects/auth/src';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<any>, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select(authQuery.getAuthenticated).pipe(
      map(authenticated => {
        if (authenticated) {
          return true;
        } else {
          this.router.navigate(['home']);
          return false;
        }
      }),
    );
  }
}
