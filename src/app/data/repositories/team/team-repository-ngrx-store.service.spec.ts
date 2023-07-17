import { TestBed } from '@angular/core/testing';

import { TeamRepositoryNgrxStoreService } from './team-repository-ngrx-store.service';

describe('TeamRepositoryNgrxStoreService', () => {
  let service: TeamRepositoryNgrxStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamRepositoryNgrxStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
