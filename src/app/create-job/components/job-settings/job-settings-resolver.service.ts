import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment, jobEndpoints } from '../../../../environments/environment';

import { FakeBackendService } from '../../../core/public_api';

import {
    BaseSettings,
    Recommendation
} from '../../models/index';

@Injectable()
export class PrioritiesResolver implements Resolve<any> {
    constructor(private _fakeBackend: FakeBackendService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this._fakeBackend.getPriorities();
    }
}

@Injectable()
export class SitesResolver implements Resolve<any> {
    constructor(private _fakeBackend: FakeBackendService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this._fakeBackend.getSites();
    }
}

@Injectable()
export class ApplicationsResolver implements Resolve<any> {
    constructor(private _fakeBackend: FakeBackendService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this._fakeBackend.getApplications();
    }
}
