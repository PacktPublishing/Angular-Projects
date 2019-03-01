import { Directive, Host } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';

@Directive({
  selector: '[baDropdownToggle]',
  host: {
    '(click)': '_toggle($event)',
    '(keypress)': '_toggle($event)'
  }
})
export class DropdownToggleDirective {


  constructor(@Host() private dropdown: DropdownDirective) {
    this.dropdown.toggle = this;
  }

  _toggle(event) {
    console.log(this.dropdown.open)
    this.dropdown.open = !this.dropdown.open;
  }

}
