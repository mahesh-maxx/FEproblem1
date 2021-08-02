import { TimeTakenActions, TimeTakenActionTypes } from '../actions';

export interface TimeTakenState {
  totalTimeTaken: number;
}

export const initialTimeTakenState: TimeTakenState = {
  totalTimeTaken: 0
};

export function timeTakenReducer(
  state = initialTimeTakenState,
  action: TimeTakenActions
): TimeTakenState {
  switch (action.type) {
    case TimeTakenActionTypes.AddTimeTaken:
      return {
        ...state,
        totalTimeTaken: state.totalTimeTaken + action.payload
      };
    case TimeTakenActionTypes.RemoveTimeTaken:
      return {
        ...state,
        totalTimeTaken: state.totalTimeTaken - action.payload
      };
    default:
      return state;
  }
}
