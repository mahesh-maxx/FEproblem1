import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../models';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public http: HttpClient, public cookieService: CookieService) {}

  getVehicles() {
    return this.http.get(API_URL + 'vehicles');
  }

  getPlanets() {
    return this.http.get(API_URL + 'planets');
  }

  findFalcon(selectedPlanets, selectedVehicles) {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
    const options: any = {
      headers: new HttpHeaders(headers)
    };
    const token = this.cookieService.get('falconToken');
    const requestBody = {
      token: token,
      planet_names: selectedPlanets,
      vehicle_names: selectedVehicles
    };
    return this.http.post(API_URL + 'find', requestBody, options);
  }
}
