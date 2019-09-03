import { Injectable } from '@angular/core';
import { FileUploadApiService } from './file-upload-api.service';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private fileUploadApiService: FileUploadApiService) { }
  
  fetchJobcardData(){
    this.fileUploadApiService.fetchGetJobcard()
    .subscribe((response: any) => {
      if(response.status == 1){
        this.fileUploadApiService.JobcardDataArray = response.data;
      }else {
        this.fileUploadApiService.JobcardDataArray = [];
      }
    })
  }
}
