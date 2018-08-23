import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormArray, FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { AbstractFormComponent } from '../abstract-form-component';

import { AccordionHeaderModel } from '../../../shared/public_api';
import { Recommendation } from '../../models/recommendation.model';

import { FakeBackendService } from '../../../core/public_api';
import { CreateJobDataService } from '../../pages/create-job.dataservice';
import { RecommendationsService } from './recommendations.service';
import { RecommendationResolver } from './recommendations-resolver.service';


@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent extends AbstractFormComponent implements OnInit {

  queuename = 'Normal Queue';
  recommendationForm: FormGroup;

  panel: AccordionHeaderModel;
  recommendationCards: Recommendation[];

  constructor(
    private _fb: FormBuilder,
    private _createJobDS: CreateJobDataService,
    private _fakeBackend: FakeBackendService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _recService: RecommendationsService,
    private _rec: ActivatedRoute
  ) {
    super();
    /**
     * Commented out the subscription to resolver to be used with actual backend
     */
    // this._rec.data.map(data => data.recommendations.json()).subscribe((res) => {
    //   console.log(res);
    // });
  }

  ngOnInit() {
    this.recommendationForm = this.createRecommendationForm();
    this.panel = {title: 'Resource Setting', expanded: true};
    this._fakeBackend.getRecommendations().subscribe(data => {
      this.recommendationCards = data;
    });

    /** To be Removed later once resolver is okay*/

   this._createJobDS.submitBaseInfo(this._createJobDS.getBaseSettings());
  //  this._recService.submitBaseInfo(this._createJobDS.getBaseSettings());

    this.populateFormMockedData(this.recommendationCards);
  }

  createRecommendationForm(): FormGroup {
    return this._fb.group({
      recommendations: this._fb.array([this.initRecommendation()]),
    });
  }

  initRecommendation(): FormGroup {
    return this._fb.group({
      waitingtime: [''],
      walltime: [''],
      price: [''],
      chunk: [''],
      ncpu: [''],
      mem: [''],
      gpu: [''],
      clockspeed: [''],
      cluster: ['']
    });
  }

  get recommendationFormArray(): FormArray {
    return this.recommendationForm.get('recommendations') as FormArray;
  }

  addRecommendation(): void {
    const fg = this.initRecommendation();
    this.recommendationFormArray.push(fg);
  }

  deleteRecommendation(idx: number): void {
    this.recommendationFormArray.removeAt(idx);
  }

  populateFormMockedData(recommendations: Recommendation[]): void {
    this.recommendationForm.setControl('recommendations',
    this._fb.array((recommendations || [])
    .map((recommendation) => this.removeKey(recommendation, ['title', 'subtitle']))
    .map((filteredRecommendation) => this._fb.group(filteredRecommendation))));
  }

  removeKey(object: Recommendation, keys: string[]): Recommendation {
    const newObject = Object.assign({}, object);
    delete newObject[keys[0]];
    delete newObject[keys[1]];
    return newObject;
  }

  onSelectHandler(idx: number) {
    const formValue = {...this.recommendationForm.value.recommendations[idx], queuename: this.queuename, metaid: ''};
    this._createJobDS.setResourceSettings(formValue);

    this.onNext();
  }

  onNext() {
    if (this.isValid) {
      this._router.navigate(['../confirmation'], {relativeTo: this._route});
    }
  }
}
