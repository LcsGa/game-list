import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RestdbioInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const clonedRequest = request.clone({
      url: `https://gamelist-b8ec.restdb.io${request.url}`,
      setHeaders: {
        "x-apikey": "6224db6934fd621565858bbf",
      }
    })

    return next.handle(clonedRequest);
  }
}
