import {Component, OnInit} from '@angular/core';
import {ThemeOptions} from '../../../../../theme-options';
import { LoginApiService } from 'src/app/login/services/login-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
})
export class UserBoxComponent implements OnInit {
  toggleDrawer() {
    this.globals.toggleDrawer = !this.globals.toggleDrawer;
  }

  userName = localStorage.getItem('UserName');

  constructor(public globals: ThemeOptions, private loginApiService: LoginApiService, private router: Router) {
  }

  ngOnInit() {
  }

  logout(){
    // this.loginApiService.UserName = "";
    this.router.navigate(['/login-page'])
  }

}
