import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { IPlanet } from '../../models';
import { DataService } from '../../services';
import {
  GetPlanets,
  GetPlanetsFail,
  GetPlanetsSuccess,
  PlanetsActions,
  PlanetsActionTypes
} from '../actions';

@Injectable()
export class PlanetsEffects {
  constructor(
    private actions$: Actions<PlanetsActions>,
    private dataService: DataService
  ) {}

  @Effect()
  getPlanets$ = this.actions$.pipe(
    ofType<GetPlanets>(PlanetsActionTypes.GetPlanets),
    switchMap(() => {
      return this.dataService.getPlanets().pipe(
        switchMap((planets: IPlanet[]) => {
          return of(new GetPlanetsSuccess(planets));
        }),
        catchError((error: Error) => {
          return of(new GetPlanetsFail(error));
        })
      );
    })
  );
}
