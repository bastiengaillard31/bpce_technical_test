import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { selectLaunchById, selectLaunches } from '../../state/launches.selectors';
import { Launch } from '../../models/launch';

@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrl: './launch-detail.component.scss'
})
export class LaunchDetailComponent {

  launches$ = this.store.select(selectLaunches);
  launch: Launch | undefined;

  private destroy$ = new Subject<void>();

  constructor(private store: Store, private route: ActivatedRoute, private router: Router) { }

  ngOnInit () {
    this.launches$.subscribe(launches => {
      if(launches.length) {
        this.route.params.subscribe(params => {
          this.store.select(selectLaunchById(params['id'])).subscribe(
            (data) => {
              if(data) {
                this.launch = data;
              } else {
                this.router.navigate(['/error']);
              }
            });
        });
      }
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
