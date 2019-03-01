import { Directive } from '@angular/core';

@Directive({
  selector: '[baDropdownMenu]',
  host: {
    'class': 'dropdown-menu'
  }
})
export class DropdownMenuDirective {

  constructor() { }

}
