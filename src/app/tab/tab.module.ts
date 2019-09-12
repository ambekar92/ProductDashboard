import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabRoutingModule } from './tab-routing.module';
import { TabConfigComponent } from './tab-config/tab-config.component';

@NgModule({
  declarations: [TabConfigComponent],
  imports: [
    CommonModule,
    TabRoutingModule
  ]
})
export class TabModule { }
