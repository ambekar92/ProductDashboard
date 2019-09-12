import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-config',
  templateUrl: './tab-config.component.html',
  styleUrls: ['./tab-config.component.scss']
})
export class TabConfigComponent implements OnInit {

  sampleArray: any = [
    {"id": "1", "oper": "Operation 1"},
    {"id": "2", "oper": "Operation 2"},
    {"id": "3", "oper": "Operation 3"},
    {"id": "4", "oper": "Operation 4"},
    {"id": "5", "oper": "Operation 5"},
    {"id": "6", "oper": "Operation 6"},
  ];

  tabArray: any = [
    {"id": "0", "tab": "Select"},
    {"id": "1", "tab": "Tab 1"},
    {"id": "2", "tab": "Tab 2"},
    {"id": "3", "tab": "Tab 3"},
    {"id": "4", "tab": "Tab 4"},
    {"id": "5", "tab": "Tab 5"},
    {"id": "6", "tab": "Tab 6"},
    {"id": "7", "tab": "Tab 7"},
    {"id": "8", "tab": "Tab 8"},
  ]
  constructor() { }

  ngOnInit() {
    // document.getElementById("tabid").selectedIndex = "2";
  }

}
