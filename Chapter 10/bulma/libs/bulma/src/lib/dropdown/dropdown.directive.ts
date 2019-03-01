import { Directive } from '@angular/core';

@Directive({
  selector: '[baDropdown]',
  host: {
    'class': 'dropdown is-active'
  }
})
export class DropdownDirective {

  constructor() {
    console.log("run")
  }

}
