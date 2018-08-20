import { Component, OnInit, ViewChild, Input } from '@angular/core';
// import { StepsNavWrapperModel } from '../../shared/public_api';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {
  JobSettingsComponent,
  RecommendationsComponent
} from '../components/index';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent implements OnInit {

  @ViewChild(JobSettingsComponent) stepOneComponent: JobSettingsComponent;
  @ViewChild(RecommendationsComponent) stepTwoComponent: RecommendationsComponent;

  get frmStepOne() {
    return this.stepOneComponent ? this.stepOneComponent.frmStepOne : null;
 }

 get frmStepTwo() {
    return this.stepTwoComponent ? this.stepTwoComponent.frmStepTwo : null;
 }

  // stepItems: StepsNavWrapperModel[];

  // jobForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {}

  submitForm(): void {
    // console.log('saved' + JSON.stringify(this.jobForm.value));
  }

  populateMockData(): void {
  }

}
