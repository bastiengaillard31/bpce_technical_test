import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLaunches } from '../../state/launches.selectors';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrl: './launches.component.scss'
})
export class LaunchesComponent {
  launches$ = this.store.select(selectLaunches);

  constructor(private store: Store) { }
}
