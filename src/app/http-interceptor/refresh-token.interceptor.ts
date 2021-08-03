import { mergeMap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { CookieService, TokenService } from '../services';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {
  constructor(
    private tokenService: TokenService,
    private cookieService: CookieService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (
          error.status === 401 ||
          error.status === 404 ||
          error.status === 400
        ) {
          return this.tokenService.getToken().pipe(
            mergeMap((token: any) => {
              this.cookieService.set('falconToken', token.token);
              const updatedRequest = this.cloneRequestWithToken(req);
              return next.handle(updatedRequest);
            })
          );
        }
        throw error;
      })
    );
  }

  cloneRequestWithToken(request: HttpRequest<any>) {
    const token = this.cookieService.get('falconToken');
    if (!token) {
      return request;
    }
    const updatedBody = {};
    updatedBody['token'] = token;
    return request.clone({
      body: { ...request.body, ...updatedBody }
    });
  }
}
