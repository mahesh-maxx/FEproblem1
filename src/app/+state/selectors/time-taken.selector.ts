import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';

export const timeTakenState = (state: AppState) => state.totalTakenTime;

export const getTotalTimeTaken = createSelector(timeTakenState, (state) => {
  return state ? state.totalTimeTaken : null;
});
