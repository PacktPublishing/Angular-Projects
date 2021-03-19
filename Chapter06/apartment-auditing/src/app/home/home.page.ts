import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  appointments$: Observable<any>;
  itemRef: AngularFireList<any>;

  constructor(private database: AngularFireDatabase) {
    this.itemRef = this.database.list('/appointments');
    this.appointments$ = this.itemRef.snapshotChanges();
  }

  getBadgeColor(appointment) {
    const status = appointment.payload.val().status;
    return status === 'incomplete' ? 'danger' : status === 'complete' ? 'success' : 'primary';
  }

  getBadgeLabel(appointment) {
    const status = appointment.payload.val().status;
    return status === 'incomplete' ? 'Incomplete' : status === 'complete' ? 'Completed' : 'Not Started';
  }

}
