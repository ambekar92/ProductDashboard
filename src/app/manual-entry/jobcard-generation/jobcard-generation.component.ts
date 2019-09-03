import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobcard-generation',
  templateUrl: './jobcard-generation.component.html',
  styleUrls: ['./jobcard-generation.component.scss']
})
export class JobcardGenerationComponent implements OnInit {

  edit: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  editAccess() {
    this.edit = !this.edit;
  }

}
