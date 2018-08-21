import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestService {

  constructor(private _http: HttpClient) {}

  set baseUrl(baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  get baseUrl(): string {
    return this._baseUrl;
  }
  private _baseUrl: string;

  get(relativeUrl: string, queryParam?: HttpParams | { [param: string]: string | string[] }): Observable<any> {
    if (queryParam) {
      return this._http.get(this.baseUrl + relativeUrl, {params: queryParam, responseType: 'json'});
    }
    return this._http.get(this.baseUrl + relativeUrl, {responseType: 'json'});
  }

  getFullResponse(relativeUrl: string, queryParam?: HttpParams |
  { [param: string]: string | string[] }): Observable<HttpResponse<any>> {
    if (queryParam) {
      return this._http.get(this.baseUrl + relativeUrl, {observe: 'response', params: queryParam, responseType: 'json'});
    }
    return this._http.get(this.baseUrl + relativeUrl, {observe: 'response', responseType: 'json'});
  }

  post(relativeUrl: string, body: any | null): Observable<any> {
    return this._http.post(this.baseUrl + relativeUrl, body, {responseType: 'json'});
  }

  postFullResponse(relativeUrl: string, body: any | null): Observable<HttpResponse<any>> {
    return this._http.post(this.baseUrl + relativeUrl, body, {observe: 'response', responseType: 'json'});
  }

  delete(relativeUrl: string, queryParam?: HttpParams | { [param: string]: string | string[] }): Observable<any> {
    return this._http.delete(this.baseUrl + relativeUrl, {params: queryParam, responseType: 'json'});
  }

  deleteFullResponse(relativeUrl: string, queryParam?: HttpParams | { [param: string]: string | string[] }): Observable<any> {
    return this._http.delete(this.baseUrl + relativeUrl, {observe: 'response', params: queryParam, responseType: 'json'});
  }
}
