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

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {
  }

  // placeholder to set Authorization header in the future
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!req.headers.has('Content-Type')) {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json'
        }
      });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    console.log('request...' + req);
    return next.handle(req);
  }

}
