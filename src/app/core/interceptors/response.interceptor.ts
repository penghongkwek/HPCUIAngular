import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor() {
  }

  // placeholder to set Authorization header in the future
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req)
    .map(resp => {
        if (resp instanceof HttpResponse) {
            console.log('Response is ::');
            console.log(resp.body);
        }
        return Observable.of(resp);
    }).catch(err => {
        console.log('Response...' + err);
        if (err instanceof HttpResponse) {
            console.log(err.status);
            console.log(err.body);
        }
        return Observable.of(err);
    });
  }

}
