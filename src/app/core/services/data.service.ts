import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RestService } from './rest.service';
import { Serializer } from '../interfaces/serializer.interface';

@Injectable()
export class DataService extends RestService {

  constructor(http: HttpClient) {
    super(http);
  }

  public setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public getBaseUrl(): string {
    return this.baseUrl;
  }

  public create<RequestType, ResponseType>(items: RequestType, endpoint: string, serializer: Serializer): Observable<ResponseType> {
    return this.post(endpoint, serializer.toJson(items))
    .map(data => serializer.fromJson(data) as ResponseType);
  }

  public read<RequestType, ResponseType>(endpoint: string, params: {},  serializer: Serializer): Observable<ResponseType> {
    const httpParams = new HttpParams({fromObject: params});
    return this.get(endpoint, httpParams)
    .map((data: any) => serializer.fromJson(data) as ResponseType);
  }

  public list<RequestType, ResponseType>(endpoint: string, params: {}, serializer: Serializer): Observable<ResponseType> {
    const httpParams = new HttpParams({fromObject: params});
    return this.get(endpoint, httpParams)
    .map((data: any) => {
      return data.map(item => serializer.fromJson(item) as ResponseType);
    });
  }

  public fetch<RequestType, ResponseType>(items: RequestType, endpoint: string, serializer: Serializer): Observable<ResponseType> {
    return this.post(endpoint, serializer.toJson(items))
    .map((data: any) => {
      return data.map(item => serializer.fromJson(data) as ResponseType);
    });
  }

  public remove<RequestType, ResponseType>(endpoint: string, params: {}, serializer: Serializer): Observable<ResponseType> {
    const httpParams = new HttpParams({fromObject: params});

    if (serializer) {
      return this.delete(endpoint, httpParams)
      .map((data: any) => serializer.fromJson(data) as ResponseType);
    }
    return this.delete(endpoint, httpParams);
  }
}
