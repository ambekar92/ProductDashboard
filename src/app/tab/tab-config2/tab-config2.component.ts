import { Component, OnInit, ViewChild } from '@angular/core';
import { TabConfigService } from '../services/tab-config/tab-config.service';
import { TabConfigApiService } from '../services/tab-config/tab-config-api.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ListGroupsComponent } from 'src/app/DemoPages/Elements/list-groups/list-groups.component';

@Component({
  selector: 'app-tab-config2',
  templateUrl: './tab-config2.component.html',
  styleUrls: ['./tab-config2.component.scss']
})
export class TabConfig2Component implements OnInit {

  newTabCode: any;
  tabNum: any;
  tabName: any;
  constructor(public tabConfigService: TabConfigService, public tabConfigApiService: TabConfigApiService, private modalService: NgbModal) { localStorage.setItem('MachCode', null), localStorage.setItem('oldTabCode', null), localStorage.setItem('oldTabName', null);}

  open1(content1) {
    this.modalService.open(content1, {
      size: 'lg'
    });
  }

  open2(content2, machCode, oldTabCode, tabName) {
    this.modalService.open(content2, {
    })
    localStorage.setItem('MachCode', machCode);
    localStorage.setItem('oldTabCode', oldTabCode);
    localStorage.setItem('oldTabCode', oldTabCode);
    localStorage.setItem('oldTabName', tabName);
    this.tabNum = localStorage.getItem('oldTabCode');
    this.tabName = localStorage.getItem('oldTabName');
    this.tabConfigService.fetchTabList();
  }


  ngOnInit() {
    // this.tabConfigService.fetchLineList();
    // this.tabConfigService.fetchMachineDetails();
    // this.tabConfigService.fetchTabList();
    this.tabConfigService.fetchMachineDetails2();
    this.tabConfigService.fetchOverview();
  }

  tabSelect(tabCode){
    this.newTabCode = tabCode;
  }

  assign(){
    this.tabConfigApiService.tabCode = this.newTabCode;
    this.tabConfigApiService.assgnStatus = 1;
    this.tabConfigApiService.machineCode = localStorage.getItem('MachCode');
    this.tabConfigApiService.oldTabCode = localStorage.getItem('oldTabCode');
    this.tabConfigApiService.empId = localStorage.getItem('UserName');
    this.tabConfigService.assignUnassignTab();
   }

   unAssign(){
    this.tabConfigApiService.tabCode = this.tabNum;
    this.tabConfigApiService.assgnStatus = 0;
    this.tabConfigApiService.machineCode = 0;
    this.tabConfigApiService.oldTabCode = 0;
    this.tabConfigApiService.empId = 0;
    this.tabConfigService.assignUnassignTab();
   }
}
