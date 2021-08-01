import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { from } from 'rxjs';
import { AppState } from './../../+state';

import { SelectVehicleComponent } from './select-vehicle.component';

const MockStore = {
  select(fcn) {
    const result = [];
    return from([result]);
  },
  dispatch(fnc) {}
};

describe('SelectVehicleComponent', () => {
  let component: SelectVehicleComponent;
  let fixture: ComponentFixture<SelectVehicleComponent>;
  let store: Store<AppState>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectVehicleComponent],
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
    fixture = TestBed.createComponent(SelectVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
