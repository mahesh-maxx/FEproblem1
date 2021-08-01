import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, GetPlanets, GetVehicles } from './+state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Finding-Falcon';

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new GetVehicles());
    this.store.dispatch(new GetPlanets());
  }
}
