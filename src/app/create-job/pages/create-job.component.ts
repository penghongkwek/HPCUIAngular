import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StepsNavWrapperModel } from '../../shared/public_api';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  JobSettingsComponent,
  RecommendationsComponent
} from '../components/index';

import { BreadcrumbProvider } from '../../providers/breadcrumb.providers';
import { JobSettingsProvider } from '../../providers/jobsettings.providers';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss'],
  providers: [JobSettingsProvider]
})

export class CreateJobComponent implements OnInit {

  stepItems: StepsNavWrapperModel[];

  jobForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private breadcrumbProvider: BreadcrumbProvider,
    private jobsettingsProvider: JobSettingsProvider,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.stepItems = [
      {id: '1', label: 'Job Settings', routerLink: 'settings', icon: 'assignment', disabled: false},
      {id: '2', label: 'Recommendations', routerLink: 'recommendations', icon: 'chat_bubble_outline', disabled: false},
      {id: '3', label: 'Confirmation', routerLink: 'confirmation', icon: 'pageview', disabled: false},
      {id: '4', label: 'Submitted', routerLink: 'submitted', icon: 'done', disabled: false}
    ];
    this.jobsettingsProvider.getNameByUrl(this.route.snapshot.params.name)
      .then(name => this.breadcrumbProvider.addItem(name));
  }

  submitForm(): void {
    console.log('saved' + JSON.stringify(this.jobForm.value));
  }

  populateMockData(): void {
  }

}
