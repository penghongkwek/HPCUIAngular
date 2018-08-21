import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {
  JobSubmitSerializer,
  RecommendationRequestSerializer
} from './serializer.interface';

import {
  BaseSettings,
  JobSettings,
  ResourceSettings,
  Confirmation,
  Recommendation,
  Job
} from '../models/index';

import { DataService } from '../../core/services/data.service';
import { environment, jobEndpoints } from '../../../environments/environment';

@Injectable()
export class CreateJobDataService {

  private _baseSettings = new BaseSettings();
  private _jobSettings = new JobSettings();
  private _resourceSettings = new ResourceSettings();
  private _confirmation = new Confirmation();
  private _job = new Job();

  private _recRequestSerializer = new RecommendationRequestSerializer();

  private _jobSubmitSerializer = new JobSubmitSerializer();

  constructor(private _ds: DataService) {
    this._ds.setBaseUrl(environment.baseUrl);
  }

  getBaseSettings(): BaseSettings {
    return this._baseSettings;
  }

  setBaseSettings(savedValues: any): void {
    this._baseSettings.userid = savedValues.userid;
    this._baseSettings.name = savedValues.name;
    this._baseSettings.priority = savedValues.priority;
    this._baseSettings.walltime = savedValues.walltime;
    this._baseSettings.sites = savedValues.sites;
    this._baseSettings.app = savedValues.app;
  }

  getJobSettings(): JobSettings {
    return this._jobSettings;
  }

  setJobSettings(savedValues: any): void {
    Object.keys(savedValues).map(key => {
      this._jobSettings[key] = savedValues[key];
    });

    /** To be Removed later */
    this._jobSettings.app.settings[0] = {inputs: ['/folder/inputs']};
  }

  getResourceSettings(): ResourceSettings {
    return this._resourceSettings;
  }

  setResourceSettings(savedValues: any): void {
    this._resourceSettings.metaid = savedValues.metaid;
    this._resourceSettings.chunk = savedValues.chunk;
    this._resourceSettings.ncpu = savedValues.ncpu;
    this._resourceSettings.mem = savedValues.mem;
    this._resourceSettings.cluster = savedValues.cluster;
    this._resourceSettings.queuename = savedValues.queuename;
    /**
     * Commented out to be replaced with when all the keys are supported in resource-settings.model are supported
     */
    // Object.keys(formValue).map(key => {
    //   this._resourceSettings[key] = formValue[key];
    // });
  }

  getConfirmationDisplay(): Confirmation {
    Object.keys(this._confirmation.basic_settings).map(key => {
        this._confirmation.basic_settings[key] =  this._jobSettings[key];
    });

    Object.keys(this._confirmation.resource_settings).map(key => {
      this._confirmation.resource_settings[key] = this._resourceSettings[key];
    });

    Object.keys(this._confirmation.additional_settings).map(key => {
      this._confirmation.additional_settings[key] = this._jobSettings[key];
    });

    this._confirmation.app_specific_settings = this._jobSettings.app.settings;

    return this._confirmation;
  }

  getSubmissionSettings(): Job {
    this._job = Object.assign({}, this.getJobSettings(), this.getResourceSettings());
    return this._job;
  }

  submitBaseInfo(info: BaseSettings): any {
    console.log('submitbaseinfo');
    const apiEndpoint = environment.apiJobPrefix + jobEndpoints.getRecommendations;
    this._ds.create<BaseSettings, any>(info, apiEndpoint, this._recRequestSerializer).subscribe(data => {
      console.log(data);
      return data;
    }, error => {
      console.log('Error', error);
    }) ;
  }

  submitJob(job: Job): any {
    const apiEndpoint = environment.apiJobPrefix + jobEndpoints.submitJob;
    return this._ds.create<Job, any>(job, apiEndpoint, this._jobSubmitSerializer).subscribe(data => {
      console.log(data);
      return data;
    }, error => {
      console.log('Error', error);
    });
  }
}
