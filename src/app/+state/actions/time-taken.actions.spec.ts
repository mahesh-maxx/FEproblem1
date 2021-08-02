import * as fromTimeTakenAction from './time-taken.actions';

describe('Add Time Taken Action', () => {
  it('should create an instance of Add Time Taken action', () => {
    expect(fromTimeTakenAction.AddTimeTaken).toBeTruthy();
  });
});

describe('Remove Time Taken  Action', () => {
  it('should create an instance of Remove Time Taken action', () => {
    expect(fromTimeTakenAction.RemoveTimeTaken).toBeTruthy();
  });
});
