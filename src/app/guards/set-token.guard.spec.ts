import { TestBed, async, inject } from '@angular/core/testing';

import { SetTokenGuard } from './set-token.guard';

describe('SetTokenGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetTokenGuard]
    });
  });

  it('should ...', inject([SetTokenGuard], (guard: SetTokenGuard) => {
    expect(guard).toBeTruthy();
  }));
});
