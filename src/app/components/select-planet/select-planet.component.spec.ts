import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';

import { SelectPlanetComponent } from './select-planet.component';
import { MockSelectVehicleComponent } from '..';
import { from } from 'rxjs';
import { AppState } from './../../+state';

const MockStore = {
  select(fcn) {
    const result = [];
    return from([result]);
  },
  dispatch(fnc) {}
};
describe('SelectPlanetComponent', () => {
  let component: SelectPlanetComponent;
  let fixture: ComponentFixture<SelectPlanetComponent>;
  let store: Store<AppState>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectPlanetComponent, MockSelectVehicleComponent],
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
    fixture = TestBed.createComponent(SelectPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
