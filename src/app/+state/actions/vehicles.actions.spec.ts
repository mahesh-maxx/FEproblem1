import * as fromVehicleAction from './vehicles.actions';

describe('Get Vehicles Action', () => {
  it('should create an instance of Get Vehicles action', () => {
    expect(fromVehicleAction.GetVehicles).toBeTruthy();
  });
});

describe('Get Vehicles Success  Action', () => {
  it('should create an instance of Get Vehicles Success action', () => {
    expect(fromVehicleAction.GetVehiclesSuccess).toBeTruthy();
  });
});

describe('Get Vehicles Fail', () => {
  it('should create an instance of Get Vehicles Fail action', () => {
    expect(fromVehicleAction.GetVehiclesFail).toBeTruthy();
  });
});
