import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualEntryRoutingModule } from './manual-entry-routing.module';
import { JobcardGenerationComponent } from './jobcard-generation/jobcard-generation.component';

@NgModule({
  declarations: [JobcardGenerationComponent],
  imports: [
    CommonModule,
    ManualEntryRoutingModule
  ]
})
export class ManualEntryModule { }
