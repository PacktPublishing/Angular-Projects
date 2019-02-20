import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatSelectModule, MatDialogModule, MatBadgeModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CartComponent } from './cart/cart.component';
import { SubTotalPipe } from './sub-total.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddToCartComponent,
    CartComponent,
    SubTotalPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CartComponent]
})
export class AppModule { }
