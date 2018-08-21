import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material-module';
import { MenuItems } from './menu-items/menu-items';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import { SmartTableComponent, StepsNavWrapperComponent, AccordionWrapperComponent } from './index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    SmartTableComponent,
    StepsNavWrapperComponent,
    AccordionWrapperComponent
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    SmartTableComponent,
    StepsNavWrapperComponent,
    AccordionWrapperComponent
   ],
  providers: [ MenuItems ]
})
export class SharedModule { }
