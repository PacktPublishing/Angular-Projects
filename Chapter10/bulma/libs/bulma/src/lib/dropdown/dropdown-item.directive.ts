import { Directive, ElementRef, Host } from '@angular/core';
import { DropdownMenuDirective } from './dropdown-menu.directive';

@Directive({
  selector: '[baDropdownItem]',
  host: {
    'class': 'dropdown-item',
    'role': 'menuitem'
  }
})
export class DropdownItemDirective {
  menu: DropdownMenuDirective;

  constructor(private el: ElementRef) { }

  focus() {
    this.el.nativeElement.focus();
  }

}
