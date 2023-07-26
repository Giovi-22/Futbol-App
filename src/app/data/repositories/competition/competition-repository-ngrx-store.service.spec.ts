import { TestBed } from '@angular/core/testing';

import { CompetitionRepositoryNgrxStoreService } from './competition-repository-ngrx-store.service';

describe('CompetitionRepositoryNgrxStoreService', () => {
  let service: CompetitionRepositoryNgrxStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetitionRepositoryNgrxStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
