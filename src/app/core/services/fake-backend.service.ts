import {
    OFSettingsData,
    QESettingsData,
    RecommendationsData,
    PrioritiesAttr,
    SitesAttr,
    ApplicationsAttr
} from '../mock-data/index';

import {
    JobSettings,
    Recommendation
} from '../../create-job/public_api';

import { Observable } from 'rxjs/Observable';

export class FakeBackendService {

  getQESettings(): Observable<JobSettings> {
    return Observable.of(QESettingsData);
  }

  getOFSettings(): Observable<JobSettings> {
    return Observable.of(OFSettingsData);
  }

  getRecommendations(): Observable<Recommendation[]> {
    return Observable.of(RecommendationsData);
  }

  getPriorities(): Observable<any> {
    return Observable.of(PrioritiesAttr);
  }

  getSites(): Observable<any> {
    return Observable.of(SitesAttr);
  }

  getApplications(): Observable<any> {
    return Observable.of(ApplicationsAttr);
  }
}
