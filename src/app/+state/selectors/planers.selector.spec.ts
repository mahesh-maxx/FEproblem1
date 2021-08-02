import { mockState } from './../../models';
import {
  getAvailablesPlanets,
  getSelectedPlanets,
  isPlanetsLoading
} from './planets.selector';

const state = mockState;

describe('getSelectedPlanets selector', () => {
  it('should return result based on the state ', () => {
    // Arrange
    state.planets.selectedPlanets = ['selected1'];
    // Act + Assert
    expect(getSelectedPlanets(state)).toBeTruthy();
  });
});

describe('getAvailablesPlanets selector', () => {
  it('should return result based on the state ', () => {
    // Arrange
    state.planets.planets = [{ name: 'fake', distance: 0 }];
    // Act + Assert
    expect(getAvailablesPlanets(state)).toBeTruthy();
  });
});

describe('isPlanetsLoading selector', () => {
  it('should return result based on the state ', () => {
    // Arrange
    state.planets.loading = true;
    // Act + Assert
    expect(isPlanetsLoading(state)).toBeTruthy();
  });
});
