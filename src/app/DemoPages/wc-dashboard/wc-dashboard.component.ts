import { Component, OnInit, HostListener } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-wc-dashboard',
  templateUrl: './wc-dashboard.component.html',
  styleUrls: ['./wc-dashboard.component.scss']
})
export class WCDashboardComponent implements OnInit {

  innerWidth: any;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {

  }

  // Host listener for capturing the window size
  @HostListener('window:size', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;

    if (this.innerWidth > 950 && this.innerWidth <= 1280) {

    } else if (this.innerWidth > 768 && this.innerWidth <= 1200) {

    } else if (this.innerWidth <= 768) {

    } else {

    }

  }

  calcWCOGridColumns() {
    if (this.innerWidth > 950 && this.innerWidth <= 1280) {
      return 8;
    } else if (this.innerWidth > 768 && this.innerWidth <= 1200) {
      return 8;
    } else if (this.innerWidth <= 768) {
      return 4;
    } else {
      return 24;
    }
  }

  calcWCGridColumns() {
    if (this.innerWidth > 950 && this.innerWidth <= 1280) {
      this.sharedService.mobileView = 1;
      return 8;
    } else if (this.innerWidth > 768 && this.innerWidth <= 1200) {
      this.sharedService.mobileView = 1;
      return 8;
    } else if (this.innerWidth <= 768) {
      this.sharedService.mobileView = 1;
      return 16;
    } else {
      this.sharedService.mobileView = 0;
      return 4;
    }
  }
}
