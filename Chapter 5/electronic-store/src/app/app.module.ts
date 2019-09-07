import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CartComponent } from './cart/cart.component';
import { SubTotalPipe } from './sub-total.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatSelectModule, MatDialogModule, MatBadgeModule, MatSnackBarModule } from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';


const matDesignModules = [ MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatSelectModule, MatDialogModule, MatBadgeModule, MatSnackBarModule ];

@NgModule({
  declarations: [
    AppComponent,
    AddToCartComponent,
    CartComponent,
    SubTotalPipe,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    ...matDesignModules,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CartComponent]
})
export class AppModule { }
