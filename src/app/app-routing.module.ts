import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {
  FindingFalconComponent,
  HomeComponent,
  PageNotFoundComponent
} from './containers';
import { SetTokenGuard } from './guards';

const routes: Routes = [
  {
    path: '',
    canActivate: [SetTokenGuard],
    component: HomeComponent
  },
  {
    path: 'find-falcon',
    component: FindingFalconComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
