import { TestBed } from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';
import { DataService, MockDataService } from '../../services';
import { provideMockActions } from '@ngrx/effects/testing';
import { GetPlanets, GetPlanetsFail, GetPlanetsSuccess } from '../actions';
import { cold, hot } from 'jasmine-marbles';
import { PlanetsEffects } from './planets.effects';

describe('PlanetsEffects', () => {
  let actions$: Observable<any>;
  let effects: PlanetsEffects;
  let utilService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        PlanetsEffects,
        provideMockActions(() => actions$),
        { provide: DataService, useClass: MockDataService }
      ]
    });

    effects = TestBed.get(PlanetsEffects);
    utilService = TestBed.get(DataService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('getPlanets$ effects', () => {
    it('should get planets and save in store', () => {
      // arrange
      const result = [{ name: 'fake', distance: 20 }];
      utilService.getPlanets = jasmine.createSpy().and.callFake(() => {
        return of(result);
      });

      const effectTrigger = new GetPlanets();
      const dispatchAction = new GetPlanetsSuccess(result);
      // act
      actions$ = hot('-a', { a: effectTrigger });
      const expected = cold('-b', { b: dispatchAction });
      // assert
      expect(effects.getPlanets$).toBeObservable(expected);
    });

    it('should throw error when service throw Error', () => {
      // arrange
      utilService.getPlanets = jasmine.createSpy().and.callFake(() => {
        return throwError(new Error('Error occured while searching'));
      });
      const error = new Error('Error occured while searching');
      const effectTrigger = new GetPlanets();
      const dispatchAction = new GetPlanetsFail(error);

      // act
      actions$ = hot('-a', { a: effectTrigger });
      const expected = cold('-b', { b: dispatchAction });

      // assert
      expect(effects.getPlanets$).toBeObservable(expected);
    });
  });
});
