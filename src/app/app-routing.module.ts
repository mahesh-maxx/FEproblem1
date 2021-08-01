import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FindingFalconComponent, PageNotFoundComponent } from './containers';
import { SetTokenGuard } from './guards';

const routes: Routes = [
  {
    path: '',
    canActivate: [SetTokenGuard],
    component: AppComponent,
    children: [
      {
        path: 'find-falcon',
        component: FindingFalconComponent
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
