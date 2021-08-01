import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromVehicles from './vehicles.reducer';
import * as fromPlanets from './planets.reducer';
import * as fromFindFalcon from './find-falcon.reducer';
import * as fromTimeTaken from './time-taken.reducer';

export interface AppState {
  vehicles: fromVehicles.VehiclesState;
  planets: fromPlanets.PlanetsState;
  findFalcon: fromFindFalcon.FindFalconState;
  totalTakenTime: fromTimeTaken.TimeTakenState;
}

export const reducerForApp: ActionReducerMap<AppState> = {
  vehicles: fromVehicles.vehiclesReducer,
  planets: fromPlanets.planetsReducer,
  findFalcon: fromFindFalcon.findFalconReducer,
  totalTakenTime: fromTimeTaken.timeTakenReducer
};

export const getAppState = createFeatureSelector<AppState>('falcon');
