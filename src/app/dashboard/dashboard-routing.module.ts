import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantDashboardComponent } from './plant-dashboard/plant-dashboard.component';
import { WcDashboardComponent } from './wc-dashboard/wc-dashboard.component';
import { OeeDashboardComponent } from './oee-dashboard/oee-dashboard.component';
import { EnergyDashboardComponent } from './energy-dashboard/energy-dashboard.component';
import { AbbDashboardComponent } from './abb-dashboard/abb-dashboard.component';
import { FaultDashboardComponent } from './fault-dashboard/fault-dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/plant-dashboard',
    pathMatch: 'full',
  },
  {
    path: 'plant-dashboard',
    component: PlantDashboardComponent
  },
  {
    path: 'wc-dashboard',
    component: WcDashboardComponent
  },
  {
    path: 'oee-dashboard',
    component: OeeDashboardComponent
  },
  {
    path: 'energy-dashboard',
    component: EnergyDashboardComponent
  },
  {
    path: 'abb-dashboard',
    component: AbbDashboardComponent
  },
  {
    path: 'fault-dashboard',
    component: FaultDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
