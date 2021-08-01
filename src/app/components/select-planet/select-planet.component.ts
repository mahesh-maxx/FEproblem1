import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, Subscription } from 'rxjs';
import {
  AppState,
  getAvailablesPlanets,
  getSelectedPlanets,
  UpdateSelectedPlanets
} from './../../+state';
import { ESelectAction, IPlanet, IVehicle } from './../../models';

@Component({
  selector: 'select-planet',
  templateUrl: './select-planet.component.html',
  styleUrls: ['./select-planet.component.scss']
})
export class SelectPlanetComponent implements OnInit {
  selectedPlanet: IPlanet;
  planetList: IPlanet[];
  vehicles$: Observable<IVehicle[]>;
  planetsSubscription: Subscription;
  imageBasePath = './assets/';
  myGroup = new FormGroup({
    myControl: new FormControl()
  });
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.planetsSubscription = combineLatest([
      this.store.select(getAvailablesPlanets),
      this.store.select(getSelectedPlanets)
    ]).subscribe(([planets, selectedPlanets]) => {
      this.planetList = planets.filter((item) => {
        return selectedPlanets.indexOf(item.name) == -1;
      });
      if (this.selectedPlanet) {
        this.planetList = [this.selectedPlanet, ...this.planetList];
        this.planetList = [...new Set(this.planetList)];
      }
    });
  }

  updateSelectedPlanet(e: { target: HTMLInputElement }) {
    if (e.target.value !== '' && e.target.value.length > 0) {
      if (this.selectedPlanet && this.selectedPlanet.name) {
        this.store.dispatch(
          new UpdateSelectedPlanets(this.selectedPlanet, ESelectAction.Remove)
        );
      }
      this.selectedPlanet = this.planetList.find(
        (x) => x.name == e.target.value
      );
      this.store.dispatch(
        new UpdateSelectedPlanets(this.selectedPlanet, ESelectAction.Add)
      );
    } else {
      this.store.dispatch(
        new UpdateSelectedPlanets(this.selectedPlanet, ESelectAction.Remove)
      );
      this.selectedPlanet = null;
    }
  }

  resetSelectedPlanet() {
    this.selectedPlanet = { name: '', distance: 0 };
  }
}
