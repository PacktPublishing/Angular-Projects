import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Login, Logout, RegisterApp, authQuery } from '@ngprojects/auth';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'es-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  authenticated = false;

  constructor(private store: Store<any>, private http: HttpClient) {
    this.store.dispatch(new RegisterApp({
      clientId: environment.auth.clientId,
      domain: environment.auth.domain,
      callbackUrl: environment.auth.callbackUrl,
    }));
    if (localStorage.getItem('access_token')) {
      const exp = localStorage.getItem('exp');
      const createdTime = new Date(exp).getTime();
      const timeNow = new Date().getTime();
      if (timeNow - createdTime > 7200000) {
        this.store.dispatch(new Logout());
      }
    }
  }
}
