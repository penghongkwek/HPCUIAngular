import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecommendationsService {

  constructor(private _http: HttpClient) {
  }
}
