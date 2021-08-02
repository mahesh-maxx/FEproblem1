import * as fromPlanetAction from './planets.actions';

describe('Get Planets Action', () => {
  it('should create an instance of Get Planets action', () => {
    expect(fromPlanetAction.GetPlanets).toBeTruthy();
  });
});

describe('Get Planets Success  Action', () => {
  it('should create an instance of Get Planets Success action', () => {
    expect(fromPlanetAction.GetPlanetsSuccess).toBeTruthy();
  });
});

describe('Get Planets Fail', () => {
  it('should create an instance of Get Planets Fail action', () => {
    expect(fromPlanetAction.GetPlanetsFail).toBeTruthy();
  });
});
