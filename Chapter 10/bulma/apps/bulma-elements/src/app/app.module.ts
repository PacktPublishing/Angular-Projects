import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { PaginationComponent } from './pagination/pagination.component';
import { createCustomElement } from "@angular/elements";

@NgModule({
  declarations: [PaginationComponent],
  imports: [BrowserModule],
  entryComponents: [PaginationComponent],
  providers: [],
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(PaginationComponent, { injector });
    customElements.define('ba-pagination', el);
  }
  ngDoBootstrap() {

  }
}
