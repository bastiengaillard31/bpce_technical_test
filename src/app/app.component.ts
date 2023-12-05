import { Component } from '@angular/core';
import { LaunchService } from './services/launch-service.service';
import { Store } from '@ngrx/store';
import { LaunchesApiActions } from './state/launches.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private launchService: LaunchService, private store: Store) { }

  ngOnInit() {
    this.launchService
      .getLaunches()
      .subscribe((launches) =>
        this.store.dispatch(LaunchesApiActions.retrievedLaunchesList({ launches }))
      );
  }
}