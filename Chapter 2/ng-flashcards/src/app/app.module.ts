import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FlashComponent } from './flash/flash.component';
import { FlashService } from './flash.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, FlashComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FlashService]
})
export class AppModule { }
