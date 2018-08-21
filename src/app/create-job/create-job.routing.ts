import { Routes } from '@angular/router';

import {
  JobSettingsComponent,
  RecommendationsComponent
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
    }
  ]
}];
