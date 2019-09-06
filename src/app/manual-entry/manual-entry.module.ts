import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualEntryRoutingModule } from './manual-entry-routing.module';
import { JobcardGenerationComponent } from './jobcard-generation/jobcard-generation.component';
import {NgSelectModule} from '@ng-select/ng-select';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QRCodeModule } from 'angularx-qrcode';
import { NgxPrintModule } from 'ngx-print';

@NgModule({
  declarations: [JobcardGenerationComponent, FileUploadComponent],
  imports: [
    CommonModule,
    ManualEntryRoutingModule,
    NgSelectModule,
    FormsModule,
    NgbModule,
    QRCodeModule,
    NgxPrintModule
  ]
})
export class ManualEntryModule { }
