import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  mergeMap,
  switchMap,
  tap,
  withLatestFrom
} from 'rxjs/operators';
import { DataService } from '../../services';
import {
  FindFalcon,
  FindFalconActions,
  FindFalconActionTypes,
  FindFalconFail,
  FindFalconSuccess
} from '../actions';
import { AppState } from '../reducers';
import { getSelectedPlanets, getSelectedVehicles } from '../selectors';

@Injectable()
export class FindFalconEffects {
  constructor(
    private actions$: Actions<FindFalconActions>,
    private dataService: DataService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  @Effect()
  findFalcon$ = this.actions$.pipe(
    ofType<FindFalcon>(FindFalconActionTypes.FindFalcon),
    withLatestFrom(
      this.store.select(getSelectedPlanets),
      this.store.select(getSelectedVehicles)
    ),
    mergeMap(([any, testContext, interaction]: [any, string[], string[]]) => {
      return this.dataService.findFalcon(testContext, interaction).pipe(
        switchMap((result: any) => {
          return of(new FindFalconSuccess(result));
        }),
        catchError((error: Error) => {
          return of(new FindFalconFail(error));
        })
      );
    })
  );

  @Effect({ dispatch: false })
  findFalconSuccess$ = this.actions$.pipe(
    ofType<FindFalconSuccess>(FindFalconActionTypes.FindFalconSuccess),
    tap(() => {
      this.router.navigate(['mission-result']);
    })
  );
}
