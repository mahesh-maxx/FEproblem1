import { mockState } from '../../models';
import {
  getAvailableVehicles,
  getSelectedVehicles,
  isVehiclesLoading
} from './vehicles.selector';

const state = mockState;

describe('getSelectedVehicles selector', () => {
  it('should return result based on the state ', () => {
    // Arrange
    state.vehicles.selectedVehicles = ['selected1'];
    // Act + Assert
    expect(getSelectedVehicles(state)).toBeTruthy();
  });
});

describe('getAvailableVehicles selector', () => {
  it('should return result based on the state ', () => {
    // Arrange
    state.vehicles.vehicles = [
      { name: 'fake', speed: 3, max_distance: 30, total_no: 1 }
    ];
    // Act + Assert
    expect(getAvailableVehicles(state)).toBeTruthy();
  });
});

describe('isVehiclesLoading selector', () => {
  it('should return result based on the state ', () => {
    // Arrange
    state.vehicles.loading = true;
    // Act + Assert
    expect(isVehiclesLoading(state)).toBeTruthy();
  });
});
