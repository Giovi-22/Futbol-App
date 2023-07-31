import { TestBed } from '@angular/core/testing';

import { TeamApiServerRepositoryService } from './team-api-server-repository.service';

describe('TeamApiServerRepositoryService', () => {
  let service: TeamApiServerRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamApiServerRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
