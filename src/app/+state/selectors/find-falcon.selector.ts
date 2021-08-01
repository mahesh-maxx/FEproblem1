import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';

export const findFalconState = (state: AppState) => state.findFalcon;

export const getFalconResult = createSelector(findFalconState, (state) => {
  return state ? state.result : null;
});
