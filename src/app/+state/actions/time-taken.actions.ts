import { Action } from '@ngrx/store';

export enum TimeTakenActionTypes {
  AddTimeTaken = '[AddTimeTaken] Add Time Taken',
  RemoveTimeTaken = '[RemoveTimeTaken] Remove Time Taken',
  ResetTimeTaken = '[ResetTime] Reset Time Taken'
}

export class AddTimeTaken implements Action {
  readonly type = TimeTakenActionTypes.AddTimeTaken;
  constructor(public payload: number) {}
}

export class RemoveTimeTaken implements Action {
  readonly type = TimeTakenActionTypes.RemoveTimeTaken;
  constructor(public payload: number) {}
}

export class ResetTimeTaken implements Action {
  readonly type = TimeTakenActionTypes.ResetTimeTaken;
}

export type TimeTakenActions = AddTimeTaken | RemoveTimeTaken | ResetTimeTaken;
