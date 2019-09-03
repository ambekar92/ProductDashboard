import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedService } from 'src/app/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(public sharedService: SharedService, public http: HttpClient) { }

  UserName: any;
  
    // fetch login api
    fetchLoginAPI(username, password) {
  
      let data = {
        "email": username,
        "password": password        
      }
  
      const headerDict = {
        'Content-Type': 'application/json',
      };
  
      const requestOptions = {
        headers: new HttpHeaders(headerDict),
      };
  
      return this.http.post(this.sharedService.BaseURL + 'login', JSON.stringify(data), requestOptions);
    }
}
