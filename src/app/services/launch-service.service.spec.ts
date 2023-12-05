import { TestBed } from '@angular/core/testing';

import { LaunchService } from './launch-service.service';

describe('RocketLaunchServiceService', () => {
  let service: LaunchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
