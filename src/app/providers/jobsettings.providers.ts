import { Injectable } from '@angular/core';

import { JOB_SETTINGS } from '../core/mock-data/breadcrumbs/jobsettings';

@Injectable()
export class JobSettingsProvider {

  constructor() { }

  getNameByUrl(url: string): Promise<string> {
    return Promise.resolve(JOB_SETTINGS.get(url));
  }

}
