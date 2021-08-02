import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { AppState, getFalconResult } from '../+state';

@Injectable({
  providedIn: 'root'
})
export class ResultGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate() {
    return this.store.pipe(
      select(getFalconResult),
      map((s) => {
        if (s && s.status) {
          return true;
        }
        this.router.navigate(['']);
        return true;
      })
    );
  }
}
