import { TestBed } from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';
import { DataService, MockDataService } from './../../services';
import { FindFalconEffects } from './find-falcon.effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import {
  FindFalcon,
  FindFalconActionTypes,
  FindFalconFail,
  FindFalconSuccess
} from '../actions';
import { cold, hot } from 'jasmine-marbles';
import { Router } from '@angular/router';
const mockRouter = {
  navigate: jasmine.createSpy('navigate')
};

describe('FindFalconEffects', () => {
  let actions$: Observable<any>;
  let effects: FindFalconEffects;
  let utilService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), RouterTestingModule],
      providers: [
        FindFalconEffects,
        provideMockActions(() => actions$),
        { provide: DataService, useClass: MockDataService },
        { provide: Router, useValue: mockRouter }
      ]
    });

    effects = TestBed.get(FindFalconEffects);
    utilService = TestBed.get(DataService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('findFalcon$ effects', () => {
    it('should find falcon and save in store', () => {
      // arrange
      const result = { status: 'false' };
      utilService.findFalcon = jasmine.createSpy().and.callFake(() => {
        return of(result);
      });

      const effectTrigger = new FindFalcon();
      const dispatchAction = new FindFalconSuccess(result);
      // act
      actions$ = hot('-a', { a: effectTrigger });
      const expected = cold('-b', { b: dispatchAction });
      // assert
      expect(effects.findFalcon$).toBeObservable(expected);
    });

    it('should throw error when service throw Error', () => {
      // arrange
      utilService.findFalcon = jasmine.createSpy().and.callFake(() => {
        return throwError(new Error('Error occured while searching'));
      });
      const error = new Error('Error occured while searching');
      const effectTrigger = new FindFalcon();
      const dispatchAction = new FindFalconFail(error);

      // act
      actions$ = hot('-a', { a: effectTrigger });
      const expected = cold('-b', { b: dispatchAction });

      // assert
      expect(effects.findFalcon$).toBeObservable(expected);
    });
  });

  describe('findFalconSuccess$ effects', () => {
    it('should redirect to results page', () => {
      // arrange
      actions$ = of({
        type: FindFalconActionTypes.FindFalconSuccess,
        payload: 'fake-payload'
      });
      const resultUrl = `mission-result`;
      // act
      effects.findFalconSuccess$.subscribe();
      // assert
      expect(mockRouter.navigate).toHaveBeenCalledWith([resultUrl]);
    });
  });
});
