import { Injectable } from '@angular/core';
import { LoginApiService } from './login-api.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private loginApiService: LoginApiService, private router: Router, private _snackBar: MatSnackBar) { localStorage.setItem("token", null), localStorage.setItem('UserName', null)}

     // fetching and storing the details of the ageing Report
     fetchLoginDetails(username, password) {
      this.loginApiService.fetchLoginAPI(username, password)
        .subscribe((response: any) => {
          if (response.status == 1) {
            localStorage.setItem('token', response.token),
            localStorage.setItem('UserName', response.user.name),
            // this.loginApiService.UserName = response.user.name;
            this.router.navigate(['/manual-entry/jobcard-generation'])
          }else {
            this._snackBar.open(response.msg, "", {
              duration: 3000,
            });
          }
        })
    }
}
