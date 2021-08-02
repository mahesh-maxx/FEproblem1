import { IPlanet } from 'src/app/models';
import { GetPlanets, GetPlanetsFail, GetPlanetsSuccess } from '../actions';
import { initialPlanetsState, planetsReducer } from './planets.reducer';

describe('planetsReducer Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = planetsReducer(initialPlanetsState, action);

      expect(result).toBe(initialPlanetsState);
    });
  });

  describe('GetPlanets', () => {
    it('should get data when GetPlanets is called', () => {
      // arrange
      const action = new GetPlanets();
      // act
      const result = planetsReducer(initialPlanetsState, action);
      // assert
      expect(result.loading).toEqual(true);
    });
  });

  describe('GetPlanetsSuccess', () => {
    it('should set data when GetPlanetsSuccess is called', () => {
      // arrange
      const mockResult: IPlanet[] = [
        {
          name: 'fake-planet',
          distance: 10
        }
      ];
      const action = new GetPlanetsSuccess(mockResult);
      // act
      const result = planetsReducer(initialPlanetsState, action);
      // assert
      expect(result.loaded).toEqual(true);
      expect(result.loading).toEqual(false);
      expect(result.planets).toEqual(mockResult);
    });
  });

  describe('GetPlanetsFail', () => {
    it('should set data when GetPlanetsFail is called', () => {
      // arrange
      const err = new Error('some error');
      const action = new GetPlanetsFail(err);
      // act
      const result = planetsReducer(initialPlanetsState, action);
      // assert
      expect(result.loading).toEqual(false);
      expect(result.loaded).toEqual(false);
    });
  });
});
