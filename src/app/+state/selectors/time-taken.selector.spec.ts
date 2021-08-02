import { mockState } from '../../models';
import { getTotalTimeTaken } from './time-taken.selector';

const state = mockState;

describe('getTotalTimeTaken selector', () => {
  it('should return result based on the state ', () => {
    // Arrange
    state.totalTakenTime.totalTimeTaken = 10;
    // Act + Assert
    expect(getTotalTimeTaken(state)).toBeTruthy();
  });
});
