import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { TranslateService } from '@ngx-translate/core';
import { SnackBar } from "@nstudio/nativescript-snackbar";

const LANGUAGE_MAPPER = {
    English: 'en',
    Spanish: 'es'
}

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    languages: Array<string> = ["English", "Spanish"];
    languageSelected: number = 0;


    constructor(
        private appService: AppService,
        private translate: TranslateService
    ) { }

    ngOnInit(): void {

    }

    setLanguage(e) {
        const selectedIndex = e.object.selectedIndex;
        const snackbar = new SnackBar();

        this.appService.language = this.languages[selectedIndex];
        this.translate.setDefaultLang(LANGUAGE_MAPPER[this.languages[selectedIndex]]);
        this.translate.get('LANG_UPDATED').subscribe(val => {
            snackbar.simple(val, 'red', '#067ab4', 3, false);
        });
    }

}
