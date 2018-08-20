import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CreateJobComponent } from '../../pages/create-job.component';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {

  frmStepTwo: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.frmStepTwo = this.formBuilder.group({
      address: ['', Validators.required]
    });
  }
}
