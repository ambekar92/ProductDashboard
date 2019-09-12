import { Component, OnInit } from '@angular/core';
import { JobcardGenerationService } from '../manual-entry/services/jobcard-generation/jobcard-generation.service';
import { JobcardGenerationApiService } from '../manual-entry/services/jobcard-generation/jobcard-generation-api.service';

@Component({
  selector: 'app-qrcode-print',
  templateUrl: './qrcode-print.component.html',
  styleUrls: ['./qrcode-print.component.scss']
})
export class QrcodePrintComponent implements OnInit {

  Arr = Array; //Array type captured in a variable
  num: number = this.jobcardGenerationApiService.no_of_prints;

  elementType: 'url' | 'canvas' | 'img' = 'url';

  constructor(public jobcardGenerationService: JobcardGenerationService, public jobcardGenerationApiService: JobcardGenerationApiService) { }

  ngOnInit() {
    this.jobcardGenerationService.fetchOrderDetails();
  
  }

  ngAfterViewInit(){
    setTimeout(() => {
      window.print();
    }, 1000)
  }

}
