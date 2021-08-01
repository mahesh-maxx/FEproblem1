import { MetaReducer } from '@ngrx/store';
import { ActionTypes } from '../actions';

export function clearState(reducer) {
  return function (state, action) {
    if (action.type === ActionTypes.ClearState) {
      state = undefined;
    }

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [clearState];
