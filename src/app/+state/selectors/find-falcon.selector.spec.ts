import { mockState } from 'src/app/models';
import { getFalconResult } from './find-falcon.selector';
const state = mockState;
describe('Find Falcon selector', () => {
  it('should return result based on the state ', () => {
    // Arrange
    state.findFalcon = {
      result: { status: 'success', planet_name: 'fake' },
      loaded: true,
      loading: false
    };

    // Act + Assert
    expect(getFalconResult(state)).toBeTruthy();
  });
});
