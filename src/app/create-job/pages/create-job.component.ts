import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StepsNavWrapperModel } from '../../shared/public_api';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss'],
  providers: [ ]
})

export class CreateJobComponent implements OnInit {

  stepItems: StepsNavWrapperModel[];

  jobForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.stepItems = [
      {id: '1', label: 'Job Settings', routerLink: 'settings', icon: 'assignment', disabled: false},
      {id: '2', label: 'Recommendations', routerLink: 'recommendations', icon: 'chat_bubble_outline', disabled: false},
      {id: '3', label: 'Confirmation', routerLink: 'confirmation', icon: 'pageview', disabled: false},
      {id: '4', label: 'Submitted', routerLink: 'submitted', icon: 'done', disabled: false}
    ];
  }

  submitForm(): void {
    console.log('saved' + JSON.stringify(this.jobForm.value));
  }

  populateMockData(): void {
  }

}
