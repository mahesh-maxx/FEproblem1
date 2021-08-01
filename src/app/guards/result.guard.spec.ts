import { TestBed, async, inject } from '@angular/core/testing';

import { ResultGuard } from './result.guard';

describe('ResultGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultGuard]
    });
  });

  it('should ...', inject([ResultGuard], (guard: ResultGuard) => {
    expect(guard).toBeTruthy();
  }));
});
