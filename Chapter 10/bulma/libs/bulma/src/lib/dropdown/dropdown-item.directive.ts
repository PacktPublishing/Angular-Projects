import { Directive } from '@angular/core';

@Directive({
  selector: '[baDropdownItem]',
  host: {
    'class': 'dropdown-item'
  }
})
export class DropdownItemDirective {

  constructor() { }

}
