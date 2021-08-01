import { Action } from '@ngrx/store';
import { IFalcon } from '../../models';

export enum FindFalconActionTypes {
  FindFalcon = '[FindFalcon] Find Falcon',
  FindFalconSuccess = '[FindFalcon] Find Falcon Success',
  FindFalconFail = '[FindFalcon] Find Falcon Fail',

  ClearFalconResult = '[ClearFalconResult] Clear Falcon Result'
}

export class FindFalcon implements Action {
  readonly type = FindFalconActionTypes.FindFalcon;
}

export class FindFalconSuccess implements Action {
  readonly type = FindFalconActionTypes.FindFalconSuccess;
  constructor(public payload: IFalcon) {}
}

export class FindFalconFail implements Action {
  readonly type = FindFalconActionTypes.FindFalconFail;
  constructor(public payload: Error) {}
}

export class ClearFalconResult implements Action {
  readonly type = FindFalconActionTypes.ClearFalconResult;
}

export type FindFalconActions =
  | FindFalcon
  | FindFalconSuccess
  | FindFalconFail
  | ClearFalconResult;
