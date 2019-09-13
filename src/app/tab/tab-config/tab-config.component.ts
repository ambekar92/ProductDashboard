import { Component, OnInit } from '@angular/core';
import { TabConfigService } from '../services/tab-config/tab-config.service';
import { TabConfigApiService } from '../services/tab-config/tab-config-api.service';

@Component({
  selector: 'app-tab-config',
  templateUrl: './tab-config.component.html',
  styleUrls: ['./tab-config.component.scss']
})


export class TabConfigComponent implements OnInit {
  // btnStatus:boolean = false;

  constructor(public tabConfigService: TabConfigService, public tabConfigApiService: TabConfigApiService) { }

  ngOnInit() {
    this.tabConfigService.fetchLineList();
    this.tabConfigService.fetchMachineDetails();
    this.tabConfigService.fetchTabList();
  }


  onSelect(value){
    this.tabConfigApiService.lineCode = value;
    this.tabConfigService.fetchMachineDetails();
    this.tabConfigService.fetchTabList();
  }

  onTabSelect(value){
    this.tabConfigApiService.tabCode = value;
    debugger;
    let i: any;
    for(i=0; i<this.tabConfigApiService.TabListArray.length; i++){
      if(value == this.tabConfigApiService.TabListArray[i].tab_code){
        if(this.tabConfigApiService.TabListArray[i].assign_status==1){
          alert('Assigned :'+this.tabConfigApiService.TabListArray[i].tab);
          //this.btnStatus=true;
        }
      }else{
       // this.btnStatus=false;
      }
    }
  }

  onAssign(mach_code){
    this.tabConfigApiService.machineCode = mach_code;
    this.tabConfigApiService.assgnStatus = 1;
    this.tabConfigApiService.empId = localStorage.getItem('UserName');
    this.tabConfigService.assignUnassignTab();
  }

  onUnAssign(tab_code){
    this.tabConfigApiService.machineCode = 0;
    this.tabConfigApiService.assgnStatus = 0;
    this.tabConfigApiService.empId = 0;
    this.tabConfigApiService.tabCode = tab_code;
    this.tabConfigService.assignUnassignTab();
  }
}
