import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `<page-router-outlet></page-router-outlet>`
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.setTranslation('en', {
      TITLE: 'Title',
      DESC: 'Description',
      CHOOSE_LANG: 'Choose your language',
      NEWS: 'News',
      NEXT: 'Next',
      LANG_UPDATED: 'Language Updated'
    });

    translate.setTranslation('es', {
      TITLE: 'Título',
      DESC: 'Descripción',
      CHOOSE_LANG: 'Elige tu idioma',
      NEWS: 'Noticias',
      NEXT: 'Siguiente',
      LANG_UPDATED: 'Idioma actualizado'
    });

    translate.setDefaultLang('en');
  }
}
