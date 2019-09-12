import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedService } from 'src/app/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class JobcardGenerationApiService {

  orderNumber: any;
  plantCode: any;
  perDayQty: any;
  ngmodelperDayQty: any;
  OrderNumberArray: any;
  status: any = 0;
  confirmStatus: any;
  no_of_prints: any;
  separateArray: any = [];

  OrderDetailsArray: any = [{
    "plant_code": "Plant Code",
    "order_number": "Order Number",
    "part_number": "Part Number",
    "customer_code": "Customer Code",
    "customer_name": "Customer Name",
    "issued_qty": "Issued Quantity",
    "per_day_qty": "Per Day Quantity"
}];
  
  constructor(public sharedService: SharedService, public http: HttpClient) { }

  //fetching order number list
  fetchOrderNumberListApi(){
    return this.http.get(this.sharedService.BaseURL + 'getallorder');
  }

  //fetching order details
  fetchOrderDetailsApi(){
    let data = {
        "order_number": this.orderNumber,
        "plant_code":this.plantCode
    }

    const headerDict = {
      'Content-Type': 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.post(this.sharedService.BaseURL + 'getorderno', JSON.stringify(data), requestOptions);
  } 

  //submitting order etails
  submitOrderApi(){
    let data = {
        "order_number": this.orderNumber,
        "per_day_qty": this.perDayQty
    }

    const headerDict = {
      'Content-Type': 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.post(this.sharedService.BaseURL + 'update_per_day_qty', JSON.stringify(data), requestOptions);
  } 


  //confirm order details
  confirmOrderApi(){
    let data = {
      "order_number":this.orderNumber
    }

    const headerDict = {
      'Content-Type': 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.post(this.sharedService.BaseURL + 'jobcardconfirm', JSON.stringify(data), requestOptions);
  } 


}
