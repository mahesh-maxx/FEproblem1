import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let mockHttp;
  let service: DataService;
  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get', 'post']);
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [{ provide: HttpClient, useValue: mockHttp }]
    });
    service = TestBed.get(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get vehicles ', () => {
    service.getVehicles();
    expect(mockHttp.get).toHaveBeenCalled();
  });

  it('should get planets ', () => {
    service.getPlanets();
    expect(mockHttp.get).toHaveBeenCalled();
  });

  it('should get token ', () => {
    service.findFalcon(null, null);
    expect(mockHttp.post).toHaveBeenCalled();
  });
});
