import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { CookieService, TokenService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class SetTokenGuard implements CanActivate {
  constructor(
    private tokenService: TokenService,
    private cookieService: CookieService
  ) {}
  canActivate() {
    return this.tokenService.getToken().pipe(
      filter((token) => !!token),
      map((token: any) => {
        if (token) {
          this.cookieService.set('falconToken', token.token);
          return true;
        }
        return false;
      })
    );
  }
}
