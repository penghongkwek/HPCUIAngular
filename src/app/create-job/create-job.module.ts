import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material-module';
import { routes } from './create-job.routing';
import { SharedModule } from './../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateJobComponent } from './pages/create-job.component';

import { CreateJobDataService } from './pages/create-job.dataservice';

import { PrioritiesResolver, SitesResolver, ApplicationsResolver } from './components/job-settings/job-settings-resolver.service';

import { AppSpecificFormComponent } from './components/job-settings/app-specific-form/app-specific-form.component';

import {
  JobSettingsComponent,
  RecommendationsComponent
} from './components/index';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CreateJobComponent,
    JobSettingsComponent,
    RecommendationsComponent,
    AppSpecificFormComponent
  ],
  exports: [
    CreateJobComponent,
    JobSettingsComponent,
    RecommendationsComponent,
    AppSpecificFormComponent
  ],
  providers: [
    CreateJobDataService,
    PrioritiesResolver,
    SitesResolver,
    ApplicationsResolver
  ]
})

export class CreateJobModule {}
