import { Routes } from '@angular/router';

import { ProfileComponent } from './pages/profile/profile.component';
import { UsageComponent } from './pages/usage/usage.component';

export const routes: Routes = [{
  path: '',
  component: ProfileComponent
}, {
  path: '',
  component: UsageComponent
}];
