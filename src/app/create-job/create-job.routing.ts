import { Routes } from '@angular/router';

import {
  JobSettingsComponent,
  RecommendationsComponent
} from './components/index';

import { CreateJobComponent } from './pages/create-job.component';

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
      component: JobSettingsComponent
    },
    {
      path: 'recommendations',
      component: RecommendationsComponent
    }
  ]
}];
