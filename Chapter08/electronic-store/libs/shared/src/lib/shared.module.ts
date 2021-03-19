import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeModule, TopbarModule, ButtonModule, ListItemModule } from '@momentum-ui/angular';
@NgModule({
  imports: [CommonModule, BadgeModule, TopbarModule, ButtonModule, ListItemModule],
  exports: [BadgeModule, TopbarModule, ButtonModule, ListItemModule]
})
export class SharedModule {}
