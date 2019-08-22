import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobcardGenerationComponent } from './jobcard-generation/jobcard-generation.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManualEntryRoutingModule { }
