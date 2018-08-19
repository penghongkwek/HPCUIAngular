import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [{
  path: '',
  component: FullComponent,
  children: [{
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }, {
    path: '',
    loadChildren: './workspace/workspace.module#WorkspaceModule'
  }, {
    path: '',
    loadChildren: './user-account/user-account.module#UserAccountModule'
  }, {
    path: '',
    loadChildren: './jobs/jobs.module#JobsModule'
  }, {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }, {
    path: 'createjob',
    loadChildren: './create-job/create-job.module#CreateJobModule'
  }, {
    path: 'jobs',
    loadChildren: './jobs/jobs.module#JobsModule'
  }, {
    path: 'workspace',
    loadChildren: './workspace/workspace.module#WorkspaceModule'
  }, {
    path: 'user',
    loadChildren: './user-account/user-account.module#UserAccountModule'
  }]
}];

