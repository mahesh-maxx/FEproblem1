import { TestBed, async, inject } from '@angular/core/testing';
import { CookieService, MockTokenService, TokenService } from '../services';

import { SetTokenGuard } from './set-token.guard';

describe('SetTokenGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SetTokenGuard,
        CookieService,
        { provide: TokenService, useClass: MockTokenService }
      ]
    });
  });

  it('should ...', inject([SetTokenGuard], (guard: SetTokenGuard) => {
    expect(guard).toBeTruthy();
  }));
});
