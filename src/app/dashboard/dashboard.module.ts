import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material-module';
import { DashboardComponent } from './dashboard.component';
import { StarterRoutes } from './dashboard.routing';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    SharedModule,
    RouterModule.forChild(StarterRoutes)
  ],
  declarations: [ DashboardComponent ]
})

export class DashboardModule {}
