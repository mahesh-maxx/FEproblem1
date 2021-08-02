import { of } from 'rxjs';

export class MockTokenService {
  getToken() {
    return of();
  }
}
