import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MockHeaderComponent,
  MockSelectPlanetComponent,
  MockSelectVehicleComponent
} from '../components';

@NgModule({
  declarations: [
    MockHeaderComponent,
    MockSelectPlanetComponent,
    MockSelectVehicleComponent
  ],
  imports: [CommonModule]
})
export class TestModuleModule {}
