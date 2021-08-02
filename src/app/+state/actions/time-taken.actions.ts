import { Action } from '@ngrx/store';

export enum TimeTakenActionTypes {
  AddTimeTaken = '[AddTimeTaken] Add Time Taken',
  RemoveTimeTaken = '[RemoveTimeTaken] Remove Time Taken'
}

export class AddTimeTaken implements Action {
  readonly type = TimeTakenActionTypes.AddTimeTaken;
  constructor(public payload: number) {}
}

export class RemoveTimeTaken implements Action {
  readonly type = TimeTakenActionTypes.RemoveTimeTaken;
  constructor(public payload: number) {}
}

export type TimeTakenActions = AddTimeTaken | RemoveTimeTaken;
