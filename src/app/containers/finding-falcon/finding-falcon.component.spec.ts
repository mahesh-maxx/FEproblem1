import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { combineLatest, from, of } from 'rxjs';
import { AppState, FindFalcon, getTotalTimeTaken } from './../../+state';
import { MockSelectPlanetComponent } from './../../components';

import { FindingFalconComponent } from './finding-falcon.component';
const MockStore = {
  select(fcn) {
    const result = fcn === getTotalTimeTaken ? 0 : [];
    return from([result]);
  },
  dispatch(fnc) {}
};

describe('FindingFalconComponent', () => {
  let component: FindingFalconComponent;
  let fixture: ComponentFixture<FindingFalconComponent>;
  let store: Store<AppState>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FindingFalconComponent, MockSelectPlanetComponent],
      imports: [StoreModule.forRoot([])],
      providers: [
        {
          provide: Store,
          useValue: MockStore
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(FindingFalconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render find falcon button when planets and vehicles selected', () => {
    // arrange
    component.readyToFind$ = of(true);
    // act
    fixture.detectChanges();
    const findFalconButton =
      fixture.debugElement.nativeElement.querySelector('.find');
    // assert
    expect(findFalconButton).not.toBeNull();
  });

  it('should dispatch action to find falcon', () => {
    // arrange
    spyOn(store, 'dispatch');
    // act
    component.findFalcon();
    // assert
    expect(store.dispatch).toHaveBeenCalledWith(new FindFalcon());
  });
});
