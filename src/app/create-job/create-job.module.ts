import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';

import { MaterialModule } from '../material-module';
import { CreateJobRoutingModule } from './create-job.routing';
import { CreateJobDataService } from './pages/create-job.dataservice';
import { RecommendationsService } from './components/recommendations/recommendations.service';

import {
  JobSettingsComponent,
  RecommendationsComponent,
  ConfirmationComponent,
  SubmissionComponent
} from './components/index';

import { CreateJobComponent } from './pages/create-job.component';

import { AppSpecificFormComponent } from './components/job-settings/app-specific-form/app-specific-form.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CreateJobRoutingModule
  ],
  declarations: [
    CreateJobComponent,
    JobSettingsComponent,
    RecommendationsComponent,
    ConfirmationComponent,
    SubmissionComponent,
    AppSpecificFormComponent
  ],
  exports: [
    CreateJobComponent,
    JobSettingsComponent,
    RecommendationsComponent,
    SubmissionComponent,
    ConfirmationComponent,
    AppSpecificFormComponent
  ],
  providers: [
    CreateJobDataService,
    RecommendationsService
  ]
})

export class CreateJobModule {}
