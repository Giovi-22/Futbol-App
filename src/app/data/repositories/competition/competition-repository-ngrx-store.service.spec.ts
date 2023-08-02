import { TestBed } from '@angular/core/testing';

import { CompetitionNgrxStoreRepositoryService } from './competition-repository-ngrx-store.service';

describe('CompetitionRepositoryNgrxStoreService', () => {
  let service: CompetitionNgrxStoreRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetitionNgrxStoreRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
