import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CreateJobComponent } from '../../pages/create-job.component';

@Component({
  selector: 'app-job-settings',
  templateUrl: './job-settings.component.html',
  styleUrls: ['./job-settings.component.scss']
})
export class JobSettingsComponent implements OnInit {

  frmStepOne: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.frmStepOne = this.formBuilder.group({
        name: ['', Validators.required]
    });
  }
}
