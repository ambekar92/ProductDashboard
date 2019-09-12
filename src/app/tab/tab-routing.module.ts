import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabConfigComponent } from './tab-config/tab-config.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tab-cofig',
    pathMatch: 'full',
  },
  {
    path: 'tab-config',
    component: TabConfigComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabRoutingModule { }
