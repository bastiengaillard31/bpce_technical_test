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


  getColorClass(status: string) {

    let css_class;

    switch (status) {
      case "Launch Successful":
        css_class = "green-text";
        break;
      case "Go for Launch":
        css_class = "blue-text";
        break;
      case "To Be Confirmed":
        css_class = "orange-text";
        break;
      case "To Be Determined":
        css_class = "orange-text";
        break;
      case "Launch Failure":
        css_class = "red-text";
        break;
    }

    return css_class;
  }
}
