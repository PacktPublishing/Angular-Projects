import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../+state/auth.reducer';
import { AuthActionTypes, HandleLoginCallback } from '../+state/auth.actions';

@Component({
  selector: 'ngprojects-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private store: Store<AuthState>) { }

  ngOnInit() {
    this.store.dispatch(new HandleLoginCallback());
  }

}
