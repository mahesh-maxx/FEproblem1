import { ESelectAction, IVehicle } from 'src/app/models';
import { VehiclesActionTypes, VehiclesActions } from '../actions';

export interface VehiclesState {
  vehicles: IVehicle[];
  selectedVehicles: string[];
  loading: boolean;
  loaded: boolean;
}

export const initialVehiclesState: VehiclesState = {
  vehicles: [],
  selectedVehicles: [],
  loading: false,
  loaded: false
};

export function vehiclesReducer(
  state = initialVehiclesState,
  action: VehiclesActions
): VehiclesState {
  switch (action.type) {
    case VehiclesActionTypes.GetVehicles:
      return {
        ...state,
        loading: true
      };
    case VehiclesActionTypes.GetVehiclesSuccess:
      return {
        ...state,
        vehicles: action.payload,
        loading: false,
        loaded: true
      };
    case VehiclesActionTypes.GetVehiclesFail:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    case VehiclesActionTypes.UpdateSelectedVehicles:
      let selectedVehicles = state.selectedVehicles.slice();
      if (action.actionType === ESelectAction.Add) {
        selectedVehicles.push(action.vehicle);
        return {
          ...state,
          selectedVehicles: selectedVehicles
        };
      } else if (action.actionType === ESelectAction.Remove) {
        let indexSelected = state.selectedVehicles.findIndex(
          (x) => x == action.vehicle
        );
        if (indexSelected !== -1) {
          selectedVehicles.splice(indexSelected, 1);
          return {
            ...state,
            selectedVehicles: selectedVehicles
          };
        }
      }
    default:
      return state;
  }
}
