import { AddTimeTaken, RemoveTimeTaken } from '../actions';
import { initialTimeTakenState, timeTakenReducer } from './time-taken.reducer';

describe('timeTakenReducer Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = timeTakenReducer(initialTimeTakenState, action);

      expect(result).toBe(initialTimeTakenState);
    });
  });

  describe('AddTimeTaken', () => {
    it('should set time when AddTimeTaken is called', () => {
      // arrange
      const action = new AddTimeTaken(10);
      // act
      const result = timeTakenReducer(initialTimeTakenState, action);
      // assert
      expect(result.totalTimeTaken).toEqual(10);
    });
  });

  describe('GetVehiclesSuccess', () => {
    it('should set data when GetVehiclesSuccess is called', () => {
      // arrange
      const action = new RemoveTimeTaken(10);
      // act
      const result = timeTakenReducer(initialTimeTakenState, action);
      // assert
      expect(result.totalTimeTaken).toEqual(-10);
    });
  });
});
