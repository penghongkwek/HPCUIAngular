import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material-module';
import { SharedModule } from './../shared/shared.module';
import { routes } from './jobs.routing';

import {
  JobDetailComponent,
  JobListComponent
} from './components/index';
import { JobsComponent } from './pages/jobs.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    JobsComponent,
    JobDetailComponent,
    JobListComponent
  ],
  exports: [
    JobDetailComponent,
    JobListComponent
  ],
  providers: [
  ]
})

export class JobsModule {}
