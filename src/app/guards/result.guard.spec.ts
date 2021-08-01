import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { ResultGuard } from './result.guard';

describe('ResultGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultGuard],
      imports: [RouterTestingModule, StoreModule.forRoot([])]
    });
  });

  it('should ...', inject([ResultGuard], (guard: ResultGuard) => {
    expect(guard).toBeTruthy();
  }));
});
