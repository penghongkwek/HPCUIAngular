import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
  {
      path: '',
      component: FullComponent,
      children: [
          { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
          { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
          { path: 'createjob', loadChildren: './create-job/create-job.module#CreateJobModule' },
          { path: 'jobs', loadChildren: './jobs/jobs.module#JobsModule' },
          { path: 'workspace', loadChildren: './workspace/workspace.module#WorkspaceModule' },
          { path: 'user', loadChildren: './user-account/user-account.module#UserAccountModule' },
      ]
  },
  {
      path: '**',
      redirectTo: '/starter'
  }];

// export const AppRoutes: Routes = [{
//   path: '',
//   component: FullComponent,
//   children: [{
//     path: '',
//     redirectTo: '/dashboard',
//     pathMatch: 'full'
//   }, {
//     path: 'dashboard',
//     loadChildren: './dashboard/dashboard.module#DashboardModule'
//   }, {
//     path: 'createjob/:name',
//     loadChildren: './create-job/create-job.module#CreateJobModule'
//   }, {
//     path: 'jobs',
//     loadChildren: './jobs/jobs.module#JobsModule'
//   }, {
//     path: 'workspace',
//     loadChildren: './workspace/workspace.module#WorkspaceModule'
//   }, {
//     path: 'user',
//     loadChildren: './user-account/user-account.module#UserAccountModule'
//   }]
// }];

