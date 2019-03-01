import { Directive, Host, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { ENTER } from '@angular/cdk/keycodes';

import { DropdownDirective } from './dropdown.directive';
import { DropdownItemDirective } from './dropdown-item.directive';

@Directive({
  selector: '[baDropdownMenu]',
  host: {
    'class': 'dropdown-menu',
    'tabindex': '0',
    '(keydown)': 'onKeydown($event)',
    '(click)': '_close()',
    '(keypress)': '_close()'
  }
})
export class DropdownMenuDirective implements AfterContentInit {
  @ContentChildren(DropdownItemDirective) items: QueryList<DropdownItemDirective>;
  public keyManager: FocusKeyManager<DropdownItemDirective>;
  model: any;

  constructor(@Host() public dropdown: DropdownDirective) {
    this.dropdown.menu = this;
  }

  ngAfterContentInit() {
    this.items.forEach(item => item.menu = this);
    this.keyManager = new FocusKeyManager(this.items).withWrap();
  }

  onKeydown(event) {
    if (event.keyCode === ENTER) {
      this.dropdown.toggle.el.nativeElement.focus();
    } else {
      this.keyManager.onKeydown(event);
    }
  }

  _close() {
    this.dropdown.open = false;
  }

}
