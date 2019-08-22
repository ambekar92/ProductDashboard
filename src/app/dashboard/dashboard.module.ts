import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { WcDashboardComponent } from './wc-dashboard/wc-dashboard.component';
import { OeeDashboardComponent } from './oee-dashboard/oee-dashboard.component';
import { PlantDashboardComponent } from './plant-dashboard/plant-dashboard.component';
import { AbbDashboardComponent } from './abb-dashboard/abb-dashboard.component';
import { EnergyDashboardComponent } from './energy-dashboard/energy-dashboard.component';
import { FaultDashboardComponent } from './fault-dashboard/fault-dashboard.component';

@NgModule({
  declarations: [WcDashboardComponent, OeeDashboardComponent, PlantDashboardComponent, AbbDashboardComponent, EnergyDashboardComponent, FaultDashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
