import { TestBed, async, inject } from '@angular/core/testing';
import { of } from 'rxjs';
import { CookieService, MockTokenService, TokenService } from '../services';

import { SetTokenGuard } from './set-token.guard';

describe('SetTokenGuard', () => {
  let tokenService: TokenService;
  let cookieService: CookieService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SetTokenGuard,
        CookieService,
        { provide: TokenService, useClass: MockTokenService }
      ]
    });
    tokenService = TestBed.get(TokenService);
    cookieService = TestBed.get(CookieService);
  });

  it('should ...', inject([SetTokenGuard], (guard: SetTokenGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should activate when token received', inject(
    [SetTokenGuard],
    (guard: SetTokenGuard) => {
      tokenService.getToken = jasmine.createSpy().and.callFake(() => {
        return of({ token: 'fake-token' });
      });
      spyOn(cookieService, 'set');
      guard.canActivate().subscribe((canActivate) => {
        expect(cookieService.set).toHaveBeenCalledWith(
          'falconToken',
          'fake-token'
        );
        expect(canActivate).toBeTruthy();
      });
    }
  ));
});
