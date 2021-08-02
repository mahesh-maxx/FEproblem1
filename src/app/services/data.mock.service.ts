import { of } from 'rxjs';

export class MockDataService {
  getVehicles() {
    return of();
  }

  getPlanets() {
    return of();
  }

  findFalcon(selectedVehicles, selectedPlanets) {
    return of();
  }
}
