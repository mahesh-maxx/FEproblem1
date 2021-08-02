import { IFalcon } from 'src/app/models';
import { FindFalcon, FindFalconFail, FindFalconSuccess } from '../actions';
import {
  findFalconReducer,
  initialFindFalconState
} from './find-falcon.reducer';

describe('findFalconReducer Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = findFalconReducer(initialFindFalconState, action);

      expect(result).toBe(initialFindFalconState);
    });
  });

  describe('FindFalcon', () => {
    it('should get data when FindFalcon is called', () => {
      // arrange
      const action = new FindFalcon();
      // act
      const result = findFalconReducer(initialFindFalconState, action);
      // assert
      expect(result.loading).toEqual(true);
    });
  });

  describe('FindFalconSuccess', () => {
    it('should set data when FindFalconSuccess is called', () => {
      // arrange
      const mockResult: IFalcon = {
        planet_name: 'fake-planet',
        status: 'success'
      };
      const action = new FindFalconSuccess(mockResult);
      // act
      const result = findFalconReducer(initialFindFalconState, action);
      // assert
      expect(result.loaded).toEqual(true);
      expect(result.loading).toEqual(false);
      expect(result.result).toEqual(mockResult);
    });
  });

  describe('FindFalconFail', () => {
    it('should ger data when FindFalcon is called', () => {
      // arrange
      const err = new Error('some error');
      const action = new FindFalconFail(err);
      // act
      const result = findFalconReducer(initialFindFalconState, action);
      // assert
      expect(result.loading).toEqual(false);
      expect(result.loaded).toEqual(false);
    });
  });
});
