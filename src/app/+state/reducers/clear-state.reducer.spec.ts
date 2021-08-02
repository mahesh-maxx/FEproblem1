import { ClearState } from '../actions';
import { clearState } from './clear-state.reducer';

const invokeActionReducer = (currentState, action: any) => {
  return clearState((state) => state)(currentState, action);
};

it('should set state to initial value when clear action is dispatched', () => {
  const currentState = undefined;
  expect(invokeActionReducer(currentState, ClearState)).toBeFalsy();
});
