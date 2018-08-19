import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileComponent } from './pages/profile/profile.component';
import { MaterialModule } from '../material-module';
import { UsageComponent } from './pages/usage/usage.component';
import { routes } from './user-account.routing';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ ProfileComponent, UsageComponent ]
})

export class UserAccountModule {}
