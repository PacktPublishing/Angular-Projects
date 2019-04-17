import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartModule } from '@swimlane/ngx-charts';

import { SecretRoutingModule } from './secret-routing.module';
import { SecretComponent } from './secret.component';

@NgModule({
  declarations: [SecretComponent],
  imports: [
    CommonModule,
    SecretRoutingModule,
    LineChartModule,
  ]
})
export class SecretModule { }
