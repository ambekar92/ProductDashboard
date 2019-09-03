import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login-page',
    pathMatch: 'full',
  },
  {
    path: 'login-page',
    component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
