import { TestBed } from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';
import { DataService, MockDataService } from '../../services';
import { provideMockActions } from '@ngrx/effects/testing';
import { GetVehicles, GetVehiclesFail, GetVehiclesSuccess } from '../actions';
import { cold, hot } from 'jasmine-marbles';
import { VehiclesEffects } from './vehicles.effects';

describe('VehiclesEffects', () => {
  let actions$: Observable<any>;
  let effects: VehiclesEffects;
  let utilService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        VehiclesEffects,
        provideMockActions(() => actions$),
        { provide: DataService, useClass: MockDataService }
      ]
    });

    effects = TestBed.get(VehiclesEffects);
    utilService = TestBed.get(DataService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('getVehicles$ effects', () => {
    it('should get vehicles and save in store', () => {
      // arrange
      const result = [
        { name: 'fake', speed: 2, max_distance: 30, total_no: 1 }
      ];
      utilService.getVehicles = jasmine.createSpy().and.callFake(() => {
        return of(result);
      });

      const effectTrigger = new GetVehicles();
      const dispatchAction = new GetVehiclesSuccess(result);
      // act
      actions$ = hot('-a', { a: effectTrigger });
      const expected = cold('-b', { b: dispatchAction });
      // assert
      expect(effects.getVehicles$).toBeObservable(expected);
    });

    it('should throw error when service throw Error', () => {
      // arrange
      utilService.getVehicles = jasmine.createSpy().and.callFake(() => {
        return throwError(new Error('Error occured while searching'));
      });
      const error = new Error('Error occured while searching');
      const effectTrigger = new GetVehicles();
      const dispatchAction = new GetVehiclesFail(error);

      // act
      actions$ = hot('-a', { a: effectTrigger });
      const expected = cold('-b', { b: dispatchAction });

      // assert
      expect(effects.getVehicles$).toBeObservable(expected);
    });
  });
});
