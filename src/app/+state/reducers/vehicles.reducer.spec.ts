import { IVehicle } from 'src/app/models';
import { GetVehicles, GetVehiclesFail, GetVehiclesSuccess } from '../actions';
import { initialVehiclesState, vehiclesReducer } from './vehicles.reducer';

describe('vehiclesReducer Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = vehiclesReducer(initialVehiclesState, action);

      expect(result).toBe(initialVehiclesState);
    });
  });

  describe('GetVehicles', () => {
    it('should get data when GetVehicles is called', () => {
      // arrange
      const action = new GetVehicles();
      // act
      const result = vehiclesReducer(initialVehiclesState, action);
      // assert
      expect(result.loading).toEqual(true);
    });
  });

  describe('GetVehiclesSuccess', () => {
    it('should set data when GetVehiclesSuccess is called', () => {
      // arrange
      const mockResult: IVehicle[] = [
        {
          name: 'fake-vehicle',
          speed: 2,
          max_distance: 300,
          total_no: 2
        }
      ];
      const action = new GetVehiclesSuccess(mockResult);
      // act
      const result = vehiclesReducer(initialVehiclesState, action);
      // assert
      expect(result.loaded).toEqual(true);
      expect(result.loading).toEqual(false);
      expect(result.vehicles).toEqual(mockResult);
    });
  });

  describe('GetVehiclesFail', () => {
    it('should set data when GetVehiclesFail is called', () => {
      // arrange
      const err = new Error('some error');
      const action = new GetVehiclesFail(err);
      // act
      const result = vehiclesReducer(initialVehiclesState, action);
      // assert
      expect(result.loading).toEqual(false);
      expect(result.loaded).toEqual(false);
    });
  });
});
