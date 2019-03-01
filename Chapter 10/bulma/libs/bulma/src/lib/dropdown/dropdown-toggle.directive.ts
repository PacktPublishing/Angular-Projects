import { Directive, Host, ElementRef } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';

@Directive({
  selector: '[baDropdownToggle]',
  host: {
    '(click)': '_toggle($event)',
    // '(keypress)': '_toggle($event)'
  }
})
export class DropdownToggleDirective {


  constructor(@Host() private dropdown: DropdownDirective, public el: ElementRef) {
    this.dropdown.toggle = this;
  }

  _toggle(event) {
    this.dropdown.open = !this.dropdown.open;
    if (this.dropdown.open) {
      setTimeout(() => this.dropdown.menu.keyManager.setFocusOrigin('keyboard').setFirstItemActive());
    }
  }

}
