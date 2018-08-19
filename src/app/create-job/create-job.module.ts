import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material-module';
import { routes } from './create-job.routing';

import { CreateJobComponent } from './pages/create-job.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [ CreateJobComponent ],
  exports: [
    CreateJobComponent
  ]
})

export class CreateJobModule {}
