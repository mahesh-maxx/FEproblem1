import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, ClearState } from './../../+state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, private store: Store<AppState>) {}

  abortSearch() {
    this.store.dispatch(new ClearState());
    this.router.navigate(['']);
  }
}
