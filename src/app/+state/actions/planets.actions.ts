import { Action } from '@ngrx/store';
import { ESelectAction, IPlanet } from '../../models';

export enum PlanetsActionTypes {
  GetPlanets = '[GetPlanets] Get Planets',
  GetPlanetsSuccess = '[GetPlanets] Get Planets Success',
  GetPlanetsFail = '[GetPlanets] Get Planets Fail',

  UpdateSelectedPlanets = '[UpdateSelectedPlanets] Update Selected Planets'
}

export class GetPlanets implements Action {
  readonly type = PlanetsActionTypes.GetPlanets;
}

export class GetPlanetsSuccess implements Action {
  readonly type = PlanetsActionTypes.GetPlanetsSuccess;
  constructor(public payload: IPlanet[]) {}
}

export class GetPlanetsFail implements Action {
  readonly type = PlanetsActionTypes.GetPlanetsFail;
  constructor(public payload: Error) {}
}

export class UpdateSelectedPlanets implements Action {
  readonly type = PlanetsActionTypes.UpdateSelectedPlanets;
  constructor(public planet: IPlanet, public actionType: ESelectAction) {}
}

export type PlanetsActions =
  | GetPlanets
  | GetPlanetsSuccess
  | GetPlanetsFail
  | UpdateSelectedPlanets;
