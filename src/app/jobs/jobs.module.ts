import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material-module';
import { SharedModule } from './../shared/shared.module';

import {
  JobDetailComponent,
  JobListComponent
} from './components/index';

import { JobsComponent } from './pages/jobs.component';

const routes: Routes = [{
  path: '',
  data: {
        title: '',
        urls: [{title: 'Home', url: '/dashboard'},
        {title: 'Jobs'}]
    },
  component: JobsComponent
}];

@NgModule({
imports: [
  FormsModule,
  CommonModule,
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
