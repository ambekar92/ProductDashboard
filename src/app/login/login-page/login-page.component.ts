import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  Username: any = '';
  Password: any = '';

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  getAuthorization() {
    if (this.Username == '' || this.Password == '') {
      alert("Please Fill the Username and Password!");
    } else {
      // this.getLoggedIn(this.Username, this.Password);
      this.loginService.fetchLoginDetails(this.Username, this.Password);
    }
  }

}
