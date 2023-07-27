import { TestBed } from '@angular/core/testing';

import { UserRepositoryNgrxStoreService } from './user-repository-ngrx-store.service';

describe('UserRepositoryNgrxStoreService', () => {
  let service: UserRepositoryNgrxStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRepositoryNgrxStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
