import { Component, Input } from '@angular/core';
import { IPlanet } from './../../models';

@Component({
  selector: 'select-vehicle',
  template: ''
})
export class MockSelectVehicleComponent {
  @Input() public selectedPlanet: IPlanet;
}
