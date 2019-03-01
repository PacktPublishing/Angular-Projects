import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BulmaModule } from '@ngprojects/bulma';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BulmaModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
