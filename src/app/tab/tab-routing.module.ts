import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabConfigComponent } from './tab-config/tab-config.component';
import { TabConfig2Component } from './tab-config2/tab-config2.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tab-cofig',
    pathMatch: 'full',
  },
  {
    path: 'tab-config',
    component: TabConfig2Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabRoutingModule { }
