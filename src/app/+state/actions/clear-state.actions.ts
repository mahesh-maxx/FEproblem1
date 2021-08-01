import { Action } from '@ngrx/store';

export enum ActionTypes {
  ClearState = '[App] CLEAR STATE'
}

export class ClearState implements Action {
  readonly type = ActionTypes.ClearState;
}

export type ClearStateActions = ClearState;
