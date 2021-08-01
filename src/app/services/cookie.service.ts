import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

/**
 * Cookie Service to handle token
 *
 * @class CookieService
 */
@Injectable({
  providedIn: 'root'
})
export class CookieService {
  constructor() {}

  /**
   * Get token from Cookie
   *
   * @return {String} token
   *
   * @memberof CookieService
   */
  get(cookiename: string) {
    return Cookie.get(cookiename);
  }

  /**
   * Set Access Token in Cookie with expiration
   *
   * @memberof CookieService
   */
  set(cookiename: string, data: any, expiration?: any) {
    Cookie.set(cookiename, data, expiration, '/');
  }
}
