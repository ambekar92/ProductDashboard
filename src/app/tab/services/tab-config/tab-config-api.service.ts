import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedService } from 'src/app/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class TabConfigApiService {

  LineListArray: any = [];
  MachineListArray: any = [];
  TabListArray: any = [];
  ProdArray: any = [];
  QualArray: any = [];
  lineCode: any = "LINE_01";
  machineCode: any;
  assgnStatus: any;
  empId: any;
  tabCode: any;

  constructor(public sharedService: SharedService, public http: HttpClient) { }


  //fetching line list
  fetchLineListApi() {
    return this.http.get(this.sharedService.BaseURL + 'getline')
  }


  //fetching tab list
  fetchTabListApi() {
    return this.http.get(this.sharedService.BaseURL + 'gettablist');
  }

  //fetching machine details
  fetchMachineDetailsApi() {
    let data = {
      "line_code": this.lineCode
    }

    const headerDict = {
      'Content-Type': 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.post(this.sharedService.BaseURL + 'getmachine', JSON.stringify(data), requestOptions);
  }


  //assign/unassign tab 
  AssignUnassignTabApi() {
    let data = {
      "mach_code": this.machineCode,
      "assign_status": this.assgnStatus,
      "emp_id": this.empId,
      "tab_code": this.tabCode
    }

    const headerDict = {
      'Content-Type': 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.post(this.sharedService.BaseURL + 'assigntab', JSON.stringify(data), requestOptions);
  }

  //fetching overview
  fetchOverviewApi() {
    return this.http.get(this.sharedService.BaseURL + 'gettaboverview')
  }


}
