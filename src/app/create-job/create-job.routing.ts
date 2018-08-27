import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  JobSettingsComponent,
  RecommendationsComponent,
  ConfirmationComponent,
  SubmissionComponent
} from './components/index';

import { CreateJobComponent } from './pages/create-job.component';
import { PrioritiesResolver, SitesResolver, ApplicationsResolver } from './components/job-settings/job-settings-resolver.service';

export const routes: Routes = [
  {
    path: '',
    component: CreateJobComponent,
    children: [
    {
      path: 'settings',
      component: JobSettingsComponent,
      resolve: {
        priorities: PrioritiesResolver,
        sites: SitesResolver,
        apps: ApplicationsResolver
      },
      data: {
        title: '',
        urls: [{title: 'Home', url: '/dashboard'},
        {title: 'Jobs', url: '/jobs'},
        {title: 'New Jobs'}]
      }
    },
    {
      path: 'recommendations',
      component: RecommendationsComponent,
      data: {
        title: '',
        urls: [{title: 'Home', url: '/dashboard'},
        {title: 'Jobs', url: '/jobs'},
        {title: 'New Jobs'}]
      }
    },
    {
      path: 'confirmation',
      component: ConfirmationComponent,
      data: {
        title: '',
        urls: [{title: 'Home', url: '/dashboard'},
        {title: 'Jobs', url: '/jobs'},
        {title: 'New Jobs'}]
      }
    },
    {
      path: 'submitted',
      component: SubmissionComponent,
      data: {
        title: '',
        urls: [{title: 'Home', url: '/dashboard'},
        {title: 'Jobs', url: '/jobs'},
        {title: 'New Jobs'}]
      }
    }]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    PrioritiesResolver,
    SitesResolver,
    ApplicationsResolver
  ]
})
export class CreateJobRoutingModule { }
