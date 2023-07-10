import { TestBed } from '@angular/core/testing';

import { TeamManagerService } from './team-manager.service';

describe('TeamManagerService', () => {
  let service: TeamManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
