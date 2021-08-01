import { createSelector } from 'reselect';
import { AppState, getAppState } from '../reducers';

export const vehiclesState = (state: AppState) => state.vehicles;

export const getSelectedVehicles = createSelector(vehiclesState, (state) => {
  return state ? state.selectedVehicles : null;
});

export const isVehiclesLoading = createSelector(vehiclesState, (state) => {
  return state ? state.loading : null;
});

export const getAvailableVehicles = createSelector(vehiclesState, (state) => {
  return state ? state.vehicles : null;
});
