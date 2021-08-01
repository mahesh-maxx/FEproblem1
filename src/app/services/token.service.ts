import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(public http: HttpClient) {}

  getToken() {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
    const options: any = {
      headers: new HttpHeaders(headers)
    };
    return this.http.post(API_URL + 'token', null, options);
  }
}
