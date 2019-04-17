import { Component, OnInit } from '@angular/core';
import { authQuery, Logout, Login } from '@ngprojects/auth';
import { Store } from '@ngrx/store';

@Component({
  selector: 'es-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  title = 'ES Admin Portal';
  authenticated: any;

  constructor(private store: Store<any>) {
    this.store.select(authQuery.getAuthenticated).subscribe(auth => {
      this.authenticated = auth;
    });
  }

  ngOnInit() {
  }

  loginOrLogout() {
    if (this.authenticated) {
      this.store.dispatch(new Logout());
    } else {
      this.store.dispatch(new Login());
    }
  }

}
