import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { NgModule } from '@angular/core';
import { BrowserModule , BrowserTransferStateModule} from '@angular/platform-browser';

@NgModule({
       bootstrap: [AppComponent],
       imports: [
              BrowserModule.withServerTransition({appId: 'pb-root'}),
              BrowserTransferStateModule,
              AppModule,
       ]
})
export class AppBrowserModule {}
