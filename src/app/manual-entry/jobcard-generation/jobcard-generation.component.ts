import { Component, OnInit } from '@angular/core';
import { JobcardGenerationService } from '../services/jobcard-generation/jobcard-generation.service';
import { JobcardGenerationApiService } from '../services/jobcard-generation/jobcard-generation-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobcard-generation',
  templateUrl: './jobcard-generation.component.html',
  styleUrls: ['./jobcard-generation.component.scss']
})
export class JobcardGenerationComponent implements OnInit {

  edit: boolean = false;
  table: boolean = false;
  elementType: 'url' | 'canvas' | 'img' = 'url';
  value: string;
  noOfPrint: number = 1;
  // confirm: boolean = false;
  // submit: boolean = true;
  constructor(public jobcardGenerationService: JobcardGenerationService, public jobcardGenerationApiService: JobcardGenerationApiService, private router: Router,) { }

  ngOnInit() {
    this.jobcardGenerationService.fetchOrderNumberList();
  }

  ngOnDestroy(){
    this.jobcardGenerationApiService.OrderDetailsArray = [{
      "plant_code": "Plant Code",
      "order_number": "Order Number",
      "part_number": "Part Number",
      "customer_code": "Customer Code",
      "customer_name": "Customer Name",
      "issued_qty": "Issued Quantity",
      "per_day_qty": "Per Day Quantity"
  }];
  this.jobcardGenerationApiService.status = 0;
  }

  editAccess() {
    this.edit = !this.edit;
  }

  onSelect(value){
    if(!this.table){
      this.table = true;
    }else{
      this.table = true;
    }
    this.jobcardGenerationApiService.orderNumber = value.order_number;
    this.value = value.order_number;
    this.jobcardGenerationApiService.plantCode = value.plant_code;
    this.jobcardGenerationService.fetchOrderDetails();
  }

  onSubmit() {
    // this.confirm = true;
    if(!this.edit){
      this.jobcardGenerationApiService.orderNumber= this.jobcardGenerationApiService.OrderDetailsArray[0].order_number;
      this.jobcardGenerationApiService.perDayQty= this.jobcardGenerationApiService.OrderDetailsArray[0].per_day_qty;
      this.jobcardGenerationService.submitOrderDetails();
    }else{
      this.jobcardGenerationApiService.orderNumber= this.jobcardGenerationApiService.OrderDetailsArray[0].order_number;
      this.jobcardGenerationApiService.perDayQty= this.jobcardGenerationApiService.ngmodelperDayQty;
      this.jobcardGenerationService.submitOrderDetails();
    }
    
  }


  confirmOrder(){
    // this.submit = false;
    // this.confirm = false;
    this.jobcardGenerationApiService.confirmStatus = 1;
    this.jobcardGenerationService.confirmOrderDetails();
  }

  printPage() {

    this.jobcardGenerationApiService.no_of_prints = this.noOfPrint;
    this.router.navigate(['/qrcode-print']); 
  }
}
