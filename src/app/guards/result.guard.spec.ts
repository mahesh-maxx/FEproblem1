import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { select, Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../+state';

import { ResultGuard } from './result.guard';

describe('ResultGuard', () => {
  let store: Store<AppState>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultGuard],
      imports: [RouterTestingModule, StoreModule.forRoot([])]
    });
    store = TestBed.get(Store);
  });

  it('should create', inject([ResultGuard], (guard: ResultGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should activate the route when result is available', inject(
    [ResultGuard],
    (guard: ResultGuard) => {
      store.pipe = jasmine.createSpy().and.callFake(() => {
        return of(true);
      });
      guard.canActivate().subscribe((canActivate) => {
        expect(canActivate).toBeTruthy();
      });
    }
  ));

  it('should activate the route when result is available', inject(
    [ResultGuard],
    (guard: ResultGuard) => {
      store.pipe = jasmine.createSpy().and.callFake(() => {
        return of(false);
      });
      guard.canActivate().subscribe((canActivate) => {
        expect(canActivate).toBeFalsy();
      });
    }
  ));
});
