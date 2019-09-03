import { Component, OnInit, ViewChildren } from '@angular/core';
import {DecimalPipe} from '@angular/common';

import {Observable} from 'rxjs';
import {CountryService} from './../../DemoPages/Tables/dynamic/demo/country.service';
import {Country} from './../../DemoPages/Tables/dynamic/demo/country';
import {NgbdSortableHeaderDirective, SortEvent} from './../../DemoPages/Tables/dynamic/demo/sortable.directive';
import { FileUploadService } from '../services/file-upload/file-upload.service';
import { FileUploadApiService } from '../services/file-upload/file-upload-api.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [CountryService, DecimalPipe]
})
export class FileUploadComponent implements OnInit {

  File: any;
  heading = 'Dynamic Tables';
  subheading = 'Basic example of Angular 7 table with sort, search and filter functionality.';
  icon = 'pe-7s-notebook icon-gradient bg-mixed-hopes';

  countries$: Observable<Country[]>;
  total$: Observable<number>;

  // @ts-ignore
  @ViewChildren(NgbdSortableHeaderDirective) headers: QueryList<NgbdSortableHeaderDirective>;

  constructor(public service: CountryService, private fileUploadService: FileUploadService, private fileUploadApiService: FileUploadApiService) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.fileUploadService.fetchJobcardData();
  }
  uploadFiles(file) {
    this.File = file[0];

    // the input has an array of files in the `files` property, each one has a name that you can use. We're just using the name here.
    let fileName1 = file[0].name;
    let infoArea1 = document.getElementById('inputGroupFile01');
    // use fileName however fits your app best, i.e. add it into a div
    infoArea1.textContent = fileName1;
  }

  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }


}
