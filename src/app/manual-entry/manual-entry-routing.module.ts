import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobcardGenerationComponent } from './jobcard-generation/jobcard-generation.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/jobcard-generation',
    pathMatch: 'full',
  },
  {
    path: 'jobcard-generation',
    component: JobcardGenerationComponent
  },
  {
    path: 'file-upload',
    component: FileUploadComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManualEntryRoutingModule { }
