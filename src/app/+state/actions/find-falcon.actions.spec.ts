import * as fromFindFalconAction from './find-falcon.actions';

describe('Find Falcon Action', () => {
  it('should create an instance of Find Falcon action', () => {
    expect(fromFindFalconAction.FindFalcon).toBeTruthy();
  });
});

describe('Find Falcon Success  Action', () => {
  it('should create an instance of Find Falcon Success action', () => {
    expect(fromFindFalconAction.FindFalconSuccess).toBeTruthy();
  });
});

describe('Find Falcon Fail', () => {
  it('should create an instance of Find Falcon Fail action', () => {
    expect(fromFindFalconAction.FindFalconFail).toBeTruthy();
  });
});
