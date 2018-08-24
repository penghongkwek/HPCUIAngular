import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';

import { BreadcrumbsModel } from '../shared/public_api';

@Injectable()
export class BreadcrumbProvider {

  _addItem = new Subject<BreadcrumbsModel>();

  constructor(private router: Router) { }

  addItem(label: string, href: string = this.router.url): void {
    this._addItem.next(new BreadcrumbsModel(label, href));
  }

}
