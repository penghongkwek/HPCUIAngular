import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material-module';
import { WorkspaceComponent } from './pages/workspace.component';
import { routes } from './workspace.routing';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ WorkspaceComponent ]
})

export class WorkspaceModule {}
