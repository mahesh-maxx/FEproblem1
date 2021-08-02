import {
  HttpClient,
  HttpClientModule,
  HttpHeaders
} from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TokenService } from './token.service';

describe('TokenService', () => {
  let mockHttp;
  let service: TokenService;
  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['post']);
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [{ provide: HttpClient, useValue: mockHttp }]
    });
    service = TestBed.get(TokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get token ', () => {
    service.getToken();
    expect(mockHttp.post).toHaveBeenCalled();
  });
});
