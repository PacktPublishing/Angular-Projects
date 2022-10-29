import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NewsComponent } from "./news.component";

const routes: Routes = [
    { path: "", component: NewsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class NewsRoutingModule { }
