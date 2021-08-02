import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState, ClearState } from 'src/app/+state';

import { ResultsComponent } from './results.component';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;
  let store: Store<AppState>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsComponent],
      imports: [RouterTestingModule, StoreModule.forRoot([])]
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render success container when falcon is found', () => {
    // arrange
    component.timeSpent$ = of(100);
    component.missionDetails$ = of({
      planet_name: 'fake-planet',
      status: 'success'
    });
    // act
    fixture.detectChanges();
    const successContainer =
      fixture.debugElement.nativeElement.querySelector('.success');
    // assert
    expect(successContainer).not.toBeNull();
  });

  it('should render fail container when falcon is not found', () => {
    // arrange
    component.timeSpent$ = of(100);
    component.missionDetails$ = of({ status: 'false' });
    // act
    fixture.detectChanges();
    const failContainer =
      fixture.debugElement.nativeElement.querySelector('.fail');
    // assert
    expect(failContainer).not.toBeNull();
  });

  it('should dispatch action to clear state', () => {
    // arrange
    spyOn(store, 'dispatch');
    // act
    component.startMission();
    // assert
    expect(store.dispatch).toHaveBeenCalledWith(new ClearState());
  });
});
