import { TestBed } from '@angular/core/testing';

import { CompetitionManagerService } from './competition-manager.service';

describe('CompetitionManagerService', () => {
  let service: CompetitionManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetitionManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
