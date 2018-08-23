import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  JobSettingsComponent,
  RecommendationsComponent,
  ConfirmationComponent
} from './components/index';

import { CreateJobComponent } from './pages/create-job.component';
import { PrioritiesResolver, SitesResolver, ApplicationsResolver } from './components/job-settings/job-settings-resolver.service';


export const routes: Routes = [{
  path: '',
  component: CreateJobComponent,
  children: [
    {
      path: '',
      redirectTo: 'settings'
    },
    {
      path: 'settings',
      component: JobSettingsComponent,
      resolve: {
        priorities: PrioritiesResolver,
        sites: SitesResolver,
        apps: ApplicationsResolver
      }
    },
    {
      path: 'recommendations',
      component: RecommendationsComponent
    },
    {
      path: 'confirmation',
      component: ConfirmationComponent
    }
  ]
}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [PrioritiesResolver, SitesResolver, ApplicationsResolver]
})
export class CreateJobRoutingModule { }
