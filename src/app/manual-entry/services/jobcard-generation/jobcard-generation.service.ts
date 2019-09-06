import { Injectable } from '@angular/core';
import { JobcardGenerationApiService } from './jobcard-generation-api.service';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class JobcardGenerationService {

  constructor(private jobcardGenerationApiService: JobcardGenerationApiService, private _snackBar: MatSnackBar) { }

  //feṭch order number list
  fetchOrderNumberList(){
    this.jobcardGenerationApiService.fetchOrderNumberListApi()
    .subscribe((response: any) => {
      if(response.status == 1){
        this.jobcardGenerationApiService.OrderNumberArray = response.data;
      }
    })
  }

  //fetch order details
  fetchOrderDetails(){
    this.jobcardGenerationApiService.fetchOrderDetailsApi()
    .subscribe((response: any) => {
      if(response.status == 1){
        this.jobcardGenerationApiService.OrderDetailsArray = response.data;
        this.jobcardGenerationApiService.ngmodelperDayQty = response.data[0].per_day_qty;
        this.jobcardGenerationApiService.orderNumber = response.data[0].order_number;
        this.jobcardGenerationApiService.confirmStatus = response.data[0].confirm_status;
      }else{
        this.jobcardGenerationApiService.separateArray = [];
      }
    })
  }

  //submit order details
  submitOrderDetails(){
    this.jobcardGenerationApiService.submitOrderApi()
    .subscribe((response: any) => {
      if(response.status == 1){
        this._snackBar.open(response.msg, "", {
          duration: 3000,
        });
        this.fetchOrderDetails();
      }else{
        this._snackBar.open(response.msg, "", {
          duration: 3000,
        });
      }
    })
  }

  //confirm order details
  confirmOrderDetails(){
    this.jobcardGenerationApiService.confirmOrderApi()
    .subscribe((response: any) => {
      if(response.status == 1){
        this.jobcardGenerationApiService.status = 1
        this._snackBar.open(response.msg, "", {
          duration: 3000,
        });
        this.fetchOrderDetails();
      }
    })
  }
}
