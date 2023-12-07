import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesComponent } from './launches.component';
import { StoreModule } from '@ngrx/store';
import { launchesReducer } from '../../state/launches.reducer';
import { MatCardModule } from '@angular/material/card';

describe('LaunchesComponent', () => {
  let component: LaunchesComponent;
  let fixture: ComponentFixture<LaunchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaunchesComponent],
      imports: [
        StoreModule.forRoot({ launches: launchesReducer }),
        MatCardModule,
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
