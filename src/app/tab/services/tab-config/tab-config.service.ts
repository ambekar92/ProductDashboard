import { Injectable } from '@angular/core';
import { TabConfigApiService } from './tab-config-api.service';
import { MatSnackBar } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class TabConfigService {

  constructor(private tabConfigApiService: TabConfigApiService, private _snackBar: MatSnackBar) { }

  //fetch line list
  fetchLineList(){
    this.tabConfigApiService.fetchLineListApi()
    .subscribe((response: any) => {
      if(response.status == 1){
        this.tabConfigApiService.LineListArray = response.data;
      }
    })
  }

  //fetch machine details
  fetchMachineDetails(){
    this.tabConfigApiService.fetchMachineDetailsApi()
    .subscribe((response: any)=> {
      if(response.status == 1){
        this.tabConfigApiService.MachineListArray = response.data;
      }
    })
  }


  //fetch tab list
  fetchTabList(){
    this.tabConfigApiService.fetchTabListApi()
    .subscribe((response: any) => {
      if(response.status == 1){
        this.tabConfigApiService.TabListArray = response.data;
        this.tabConfigApiService.tabCode = response.data[0].tab_code;
      }
    })
  }


  //assign/unassign tab
  assignUnassignTab(){
    this.tabConfigApiService.AssignUnassignTabApi()
    .subscribe((response: any) => {
      if(response.status == 1){
        this._snackBar.open(response.msg, "", {
          duration: 2000,
        });
        this.fetchMachineDetails();
        this.fetchTabList();
        this.fetchOverview();
      }else{
        this._snackBar.open(response.msg, "", {
          duration: 2000,
        });
        this.fetchMachineDetails();
        this.fetchTabList();
        this.fetchOverview();
      }
    })
  }

  //fetch tab overview
  fetchOverview(){
    this.tabConfigApiService.fetchOverviewApi()
    .subscribe((response: any) => {
      if(response.status == 1){
        this.tabConfigApiService.ProdArray = response.data[0];
        this.tabConfigApiService.QualArray = response.data[1];
      }
    })
  }


}
