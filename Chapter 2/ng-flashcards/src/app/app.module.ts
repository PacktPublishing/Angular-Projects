import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlashComponent } from './flash/flash.component';
import { FlashService } from './flash.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FlashComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FlashService]
})
export class AppModule { }
