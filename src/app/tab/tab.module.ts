import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabRoutingModule } from './tab-routing.module';
import { TabConfigComponent } from './tab-config/tab-config.component';
import { MatSnackBarModule } from '@angular/material';
import { TabConfig2Component } from './tab-config2/tab-config2.component';

@NgModule({
  declarations: [TabConfigComponent, TabConfig2Component],
  imports: [
    CommonModule,
    TabRoutingModule,
    MatSnackBarModule
  ]
})
export class TabModule { }
