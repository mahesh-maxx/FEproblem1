import { Action } from '@ngrx/store';
import { ESelectAction, IVehicle } from '../../models';

export enum VehiclesActionTypes {
  GetVehicles = '[GetVehicles] Get Vehicles',
  GetVehiclesSuccess = '[GetVehicles] Get Vehicles Success',
  GetVehiclesFail = '[GetVehicles] Get Vehicles Fail',

  UpdateSelectedVehicles = '[UpdateSelectedVehicles] Update Selected Vehicles'
}

export class GetVehicles implements Action {
  readonly type = VehiclesActionTypes.GetVehicles;
}

export class GetVehiclesSuccess implements Action {
  readonly type = VehiclesActionTypes.GetVehiclesSuccess;
  constructor(public payload: IVehicle[]) {}
}

export class GetVehiclesFail implements Action {
  readonly type = VehiclesActionTypes.GetVehiclesFail;
  constructor(public payload: Error) {}
}

export class UpdateSelectedVehicles implements Action {
  readonly type = VehiclesActionTypes.UpdateSelectedVehicles;
  constructor(public vehicle: string, public actionType: ESelectAction) {}
}

export type VehiclesActions =
  | GetVehicles
  | GetVehiclesSuccess
  | GetVehiclesFail
  | UpdateSelectedVehicles;
