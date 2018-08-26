import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material-module';
import { SharedModule } from './../shared/shared.module';

import { UsageComponent } from './pages/usage/usage.component';

const routes: Routes = [{
  path: '',
  data: {
        title: '',
        urls: [{title: 'Home', url: '/dashboard'},
        {title: 'User Account'}]
    },
  component: UsageComponent
}];

@NgModule({
imports: [
  FormsModule,
  CommonModule,
  MaterialModule,
  SharedModule,
  RouterModule.forChild(routes)
    ],
  declarations: [ UsageComponent ]
})

export class UserAccountModule {}
