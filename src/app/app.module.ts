import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  PageNotFoundComponent,
  FindingFalconComponent,
  HomeComponent,
  ResultsComponent
} from './containers';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import {
  clearState,
  FindFalconEffects,
  metaReducers,
  PlanetsEffects,
  reducerForApp,
  VehiclesEffects
} from './+state';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import {
  SelectPlanetComponent,
  HeaderComponent,
  SelectVehicleComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    FindingFalconComponent,
    PageNotFoundComponent,
    SelectPlanetComponent,
    SelectVehicleComponent,
    HeaderComponent,
    HomeComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducerForApp, { metaReducers }),
    EffectsModule.forRoot([VehiclesEffects, PlanetsEffects, FindFalconEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 50, // Retains last 50 states
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
