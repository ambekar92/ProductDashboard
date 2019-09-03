import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SharedService } from 'src/app/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class FileUploadApiService {

  JobcardDataArray: any = [];

  constructor(public http: HttpClient, public sharedService: SharedService) { }

  fetchGetJobcard() {


    return this.http.get( this.sharedService.BaseURL + 'getjobcard');
  }

}
