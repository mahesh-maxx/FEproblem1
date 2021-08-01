import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  AppState,
  ClearState,
  getFalconResult,
  getTotalTimeTaken
} from './../../+state';
import { IFalcon } from './../../models';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  missionDetails$: Observable<IFalcon>;
  timeSpent$: Observable<number>;
  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {
    this.missionDetails$ = this.store.select(getFalconResult);
    this.timeSpent$ = this.store.select(getTotalTimeTaken);
  }

  startMission() {
    this.store.dispatch(new ClearState());
    this.router.navigate(['']);
  }
}
