import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeModule } from '@collab-ui/angular';
@NgModule({
  imports: [CommonModule, BadgeModule],
  exports: [BadgeModule]
})
export class SharedModule {}
