import { createSelector } from '@ngrx/store';
import { AppState, getAppState } from '../reducers';

export const planetsState = (state: AppState) => state.planets;

export const getSelectedPlanets = createSelector(planetsState, (state) => {
  return state ? state.selectedPlanets : null;
});

export const getAvailablesPlanets = createSelector(planetsState, (state) => {
  return state ? state.planets : null;
});

export const isPlanetsLoading = createSelector(planetsState, (state) => {
  return state ? state.loading : null;
});
