import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BreadcrumbsModel } from './shared/public_api';

export const AppRoutes: Routes = [{
  path: '',
  component: FullComponent,
  children: [{
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    data: {
      breadcrumbs: [
        new BreadcrumbsModel('Dashboard', '/dashboard')
      ]
    }
  }, {
    path: 'createjob/:name',
    loadChildren: './create-job/create-job.module#CreateJobModule',
    data: {
      breadcrumbs: [
        new BreadcrumbsModel('Create_Job', '/jobs')
      ]
    }
  }, {
    path: 'jobs',
    loadChildren: './jobs/jobs.module#JobsModule',
    data: {
      breadcrumbs: [
        new BreadcrumbsModel('Jobs', '/jobs')
      ]
    }
  }, {
    path: 'workspace',
    loadChildren: './workspace/workspace.module#WorkspaceModule',
    data: {
      breadcrumbs: [
        new BreadcrumbsModel('Workspace', '/workspace')
      ]
    }
  }, {
    path: 'user',
    loadChildren: './user-account/user-account.module#UserAccountModule',
    data: {
      breadcrumbs: [
        new BreadcrumbsModel('User', '/user')
      ]
    }
  }]
}];

