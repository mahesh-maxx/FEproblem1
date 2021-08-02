import { AppState } from '../+state';

export const mockState: AppState = {
  planets: {
    planets: [],
    loading: false,
    loaded: false,
    selectedPlanets: []
  },
  vehicles: {
    vehicles: [],
    selectedVehicles: [],
    loaded: false,
    loading: false
  },
  totalTakenTime: { totalTimeTaken: 0 },
  findFalcon: {
    result: { status: 'success' },
    loaded: false,
    loading: false
  }
};
