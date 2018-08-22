import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment, jobEndpoints } from '../../../../environments/environment';

import { CreateJobDataService } from '../../pages/create-job.dataservice';

import {
    BaseSettings,
    Recommendation
} from '../../models/index';

@Injectable()
export class RecommendationResolver implements Resolve<any> {
    constructor(private _createJobDS: CreateJobDataService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this._createJobDS.submitBaseInfo(this._createJobDS.getBaseSettings());
    }
}
