import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environment';
import  LST  from '@shared/utils/local-storage';
@Injectable({
  providedIn: 'root',
})
export class InterceptorHttpService implements HttpInterceptor {

  constructor() {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = LST.get<{token:string}>(environment.tokenKey,{token:''});
console.log(token);


    let request = req;

    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request);
  }
}
