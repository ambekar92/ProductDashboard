import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SharedService } from 'src/app/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class FileUploadApiService {

  JobcardDataArray: any = [];

  constructor(public http: HttpClient, public sharedService: SharedService) { }


  //for the table 
  fetchGetJobcard() {


    return this.http.get( this.sharedService.BaseURL + 'getjobcard');
  }

  //for file upload
  fetchFileUpload(file: any){
    const formData = new FormData();
    formData.append('uploadfile', file);
    // formData.append('user', localStorage.getItem("UserName"));

    return this.http.post(this.sharedService.BaseURL + 'api/jobcarduploadfile', formData);
  }
  
}
