import { Directive, Host, ElementRef, HostBinding } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';

@Directive({
  selector: '[baDropdownToggle]',
  host: {
    '(click)': '_toggle($event)',
    // '(keypress)': '_toggle($event)'
    '[attr.aria-haspopup]': 'true',
  }
})
export class DropdownToggleDirective {

  @HostBinding('attr.aria-controls') get ariaControls() {
    return this.dropdown.menu.id;
  }
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
