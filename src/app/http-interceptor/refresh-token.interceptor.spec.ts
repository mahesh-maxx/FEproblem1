import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';

import { RefreshTokenInterceptor } from './refresh-token.interceptor';
import { CookieService, MockTokenService, TokenService } from '../services';
import { of } from 'rxjs';

describe('Lang-interceptor.service', () => {
  const fakeEndpoint = 'http://fake.api.com/endpoint';
  let tokenService: TokenService;
  let cookieService: CookieService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: RefreshTokenInterceptor,
          multi: true
        },
        {
          provide: TokenService,
          useClass: MockTokenService
        },
        CookieService
      ]
    });
    tokenService = TestBed.get(TokenService);
    cookieService = TestBed.get(CookieService);
  });

  describe('intercept HTTP requests', () => {
    it('should catch http errors', inject(
      [HttpClient, HttpTestingController],
      (http: HttpClient, mock: HttpTestingController) => {
        tokenService.getToken = jasmine.createSpy().and.callFake(() => {
          return of('fake-token');
        });
        cookieService.get = jasmine.createSpy().and.callFake(() => {
          return 'fake-token';
        });

        http.post(fakeEndpoint, { token: 'null' }).subscribe(
          () => {},
          (error: HttpErrorResponse) => {
            expect(error.status).toEqual(403);
          }
        );
        const failed = mock.expectOne((req) => {
          return req.url.endsWith(fakeEndpoint);
        });
        failed.error(new ErrorEvent('FAKE_ERROR_401'), { status: 401 });

        // for succeeded call, then response
        const succeeded = mock.expectOne((req) => {
          return (
            req.url.endsWith(fakeEndpoint) && req.body.token == 'fake-token'
          );
        });
        succeeded.flush([]);
        mock.verify({ ignoreCancelled: true });
      }
    ));
  });

  afterEach(inject([HttpTestingController], (mock: HttpTestingController) => {
    mock.verify();
  }));
});
