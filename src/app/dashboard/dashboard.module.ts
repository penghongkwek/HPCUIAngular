import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material-module';
import { SharedModule } from './../shared/shared.module';

import { DashboardComponent } from './pages/dashboard.component';

const routes: Routes = [{
  path: '',
  data: {
        title: '',
        urls: [{title: 'Home', url: '/index'},
        {title: 'Dashboard'}]
    },
  component: DashboardComponent
}];

@NgModule({
imports: [
  FormsModule,
  CommonModule,
  MaterialModule,
  SharedModule,
  RouterModule.forChild(routes)
    ],
  declarations: [ DashboardComponent ]
})

export class DashboardModule {}
