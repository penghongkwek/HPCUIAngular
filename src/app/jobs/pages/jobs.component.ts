import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements AfterViewInit {

  constructor(private _router: Router) { }

  ngAfterViewInit() {}

  createJobBtnClick(): void {
    this._router.navigateByUrl('/createjob');
  }
}
