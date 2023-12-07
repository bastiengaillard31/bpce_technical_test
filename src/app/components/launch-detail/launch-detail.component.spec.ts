import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchDetailComponent } from './launch-detail.component';
import { StoreModule } from '@ngrx/store';
import { MatCardModule } from '@angular/material/card';
import { launchesReducer } from '../../state/launches.reducer';
import { ActivatedRoute } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('LaunchDetailComponent', () => {
  let component: LaunchDetailComponent;
  let fixture: ComponentFixture<LaunchDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaunchDetailComponent],
      imports: [
        StoreModule.forRoot({ launches: launchesReducer }),
        MatCardModule,
        MatProgressSpinnerModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => 'mocked-id',
              },
            },
          },
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LaunchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
