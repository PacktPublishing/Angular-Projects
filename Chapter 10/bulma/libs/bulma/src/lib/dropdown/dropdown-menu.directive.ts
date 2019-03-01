import { Directive, Host } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';

@Directive({
  selector: '[baDropdownMenu]',
  host: {
    'class': 'dropdown-menu'
  }
})
export class DropdownMenuDirective {

  constructor(@Host() private dropdown: DropdownDirective) {
    this.dropdown.menu = this;
  }

}
