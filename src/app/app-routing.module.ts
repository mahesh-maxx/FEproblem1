import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {
  FindingFalconComponent,
  HomeComponent,
  PageNotFoundComponent,
  ResultsComponent
} from './containers';
import { SetTokenGuard } from './guards';
import { ResultGuard } from './guards/result.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [SetTokenGuard],
    component: HomeComponent
  },
  {
    path: 'find-falcon',
    canActivate: [SetTokenGuard],
    component: FindingFalconComponent
  },
  {
    path: 'mission-result',
    canActivate: [ResultGuard],
    component: ResultsComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
