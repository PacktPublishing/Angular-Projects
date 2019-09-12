import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppService } from "./app.service";
import { TranslateModule } from "@ngx-translate/core";
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from "./news/news.component";
import { DetailComponent } from "./detail/detail.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot()
    ],
    declarations: [
        AppComponent,
        NewsComponent,
        DetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        AppService
    ]
})
export class AppModule { }
