import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretRoutingModule } from './secret-routing.module';
import { SecretComponent } from './secret.component';

@NgModule({
  declarations: [SecretComponent],
  imports: [
    CommonModule,
    SecretRoutingModule
  ]
})
export class SecretModule { }
