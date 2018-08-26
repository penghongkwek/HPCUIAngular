import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material-module';
import { SharedModule } from './../shared/shared.module';

import { WorkspaceComponent } from './pages/workspace.component';

const routes: Routes = [{
  path: '',
  data: {
        title: '',
        urls: [{title: 'Home', url: '/dashboard'},
        {title: 'Workspace'}]
    },
  component: WorkspaceComponent
}];

@NgModule({
imports: [
  FormsModule,
  CommonModule,
  MaterialModule,
  SharedModule,
  RouterModule.forChild(routes)
    ],
  declarations: [ WorkspaceComponent ]
})

export class WorkspaceModule {}
