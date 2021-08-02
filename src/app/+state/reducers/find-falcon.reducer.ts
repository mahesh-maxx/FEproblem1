import { IFalcon } from 'src/app/models';
import { FindFalconActions, FindFalconActionTypes } from '../actions';

export interface FindFalconState {
  result: IFalcon;
  loading: boolean;
  loaded: boolean;
}

export const initialFindFalconState: FindFalconState = {
  result: { status: null },
  loading: false,
  loaded: false
};

export function findFalconReducer(
  state = initialFindFalconState,
  action: FindFalconActions
): FindFalconState {
  switch (action.type) {
    case FindFalconActionTypes.FindFalcon:
      return {
        ...state,
        loading: true
      };
    case FindFalconActionTypes.FindFalconSuccess:
      return {
        ...state,
        result: action.payload,
        loading: false,
        loaded: true
      };
    case FindFalconActionTypes.FindFalconFail:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    default:
      return state;
  }
}
