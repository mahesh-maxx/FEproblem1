import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import {
  AppState,
  FindFalcon,
  GetPlanets,
  getSelectedPlanets,
  getSelectedVehicles,
  getTotalTimeTaken,
  GetVehicles
} from './../../+state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'finding-falcon',
  templateUrl: './finding-falcon.component.html',
  styleUrls: ['./finding-falcon.component.scss']
})
export class FindingFalconComponent implements OnInit {
  readyToFind$: Observable<boolean>;
  totalTimeTaken$: Observable<number>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new GetVehicles());
    this.store.dispatch(new GetPlanets());
    this.readyToFind$ = combineLatest([
      this.store.select(getSelectedVehicles),
      this.store.select(getSelectedPlanets)
    ]).pipe(
      map(
        ([vehicles, planets]) => vehicles.length === 4 && planets.length === 4
      )
    );
    this.totalTimeTaken$ = this.store.select(getTotalTimeTaken);
  }

  findFalcon() {
    this.store.dispatch(new FindFalcon());
  }
}
