import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges
} from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import {
  AddTimeTaken,
  AppState,
  getAvailableVehicles,
  getSelectedVehicles,
  RemoveTimeTaken,
  UpdateSelectedVehicles
} from './../../+state';
import { ESelectAction, IPlanet, IVehicle } from './../../models';

@Component({
  selector: 'select-vehicle',
  templateUrl: './select-vehicle.component.html',
  styleUrls: ['./select-vehicle.component.scss']
})
export class SelectVehicleComponent implements OnInit, OnChanges {
  @Input() public selectedPlanet: IPlanet;
  vehicleList: IVehicle[];
  selectedVehicle: string = '';
  timeTaken: number = 0;
  imageBasePath = './assets/';
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    combineLatest([
      this.store.select(getAvailableVehicles),
      this.store.select(getSelectedVehicles)
    ]).subscribe(([vehicles, selectedVehicles]) => {
      this.vehicleList = vehicles.slice();
      this.updateVehicleCount(selectedVehicles);
    });
  }

  updateSelectedVehicle(e) {
    if (this.selectedVehicle) {
      this.store.dispatch(
        new UpdateSelectedVehicles(this.selectedVehicle, ESelectAction.Remove)
      );
      this.selectedVehicle = e.target.value;
      this.store.dispatch(
        new UpdateSelectedVehicles(this.selectedVehicle, ESelectAction.Add)
      );
    } else {
      this.selectedVehicle = e.target.value;
      this.store.dispatch(
        new UpdateSelectedVehicles(this.selectedVehicle, ESelectAction.Add)
      );
    }
    this.updateTimeTaken();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.selectedPlanet.previousValue &&
      changes.selectedPlanet.currentValue === null
    ) {
      this.store.dispatch(
        new UpdateSelectedVehicles(this.selectedVehicle, ESelectAction.Remove)
      );
      this.selectedVehicle = null;
    }
  }

  updateVehicleCount(selectedVehicles: string[]) {
    let updatedVehiclesList = this.vehicleList.map((vehicle) => ({
      ...vehicle
    }));
    for (let i in selectedVehicles) {
      let index = this.vehicleList.findIndex(
        (x) => x.name === selectedVehicles[i]
      );
      updatedVehiclesList[index].total_no =
        updatedVehiclesList[index].total_no - 1;
    }
    this.vehicleList = updatedVehiclesList;
  }

  updateTimeTaken() {
    let sVehicle = this.vehicleList.find((x) => x.name == this.selectedVehicle);
    if (sVehicle && sVehicle.name) {
      let timeTaken = this.selectedPlanet.distance / sVehicle.speed;

      if (this.timeTaken > 0) {
        this.store.dispatch(new RemoveTimeTaken(this.timeTaken));

        this.timeTaken = timeTaken;
        this.store.dispatch(new AddTimeTaken(this.timeTaken));
      } else {
        this.timeTaken = timeTaken;
        this.store.dispatch(new AddTimeTaken(timeTaken));
      }
    }
  }
}
