import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModel, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ]
})
export class LoginModule { }
