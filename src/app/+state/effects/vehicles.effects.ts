import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { IVehicle } from '../../models';
import { DataService } from '../../services';
import {
  VehiclesActionTypes,
  VehiclesActions,
  GetVehicles,
  GetVehiclesSuccess,
  GetVehiclesFail
} from '../actions';

@Injectable()
export class VehiclesEffects {
  constructor(
    private actions$: Actions<VehiclesActions>,
    private dataService: DataService
  ) {}

  @Effect()
  getVehicles$ = this.actions$.pipe(
    ofType<GetVehicles>(VehiclesActionTypes.GetVehicles),
    switchMap(() => {
      return this.dataService.getVehicles().pipe(
        switchMap((vehicles: IVehicle[]) => {
          return [new GetVehiclesSuccess(vehicles)];
        }),
        catchError((error: Error) => {
          return of(new GetVehiclesFail(error));
        })
      );
    })
  );
}
