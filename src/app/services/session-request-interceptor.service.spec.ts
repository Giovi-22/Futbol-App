import { TestBed } from '@angular/core/testing';

import { SessionRequestInterceptorService } from './session-request-interceptor.service';

describe('SessionRequestInterceptorService', () => {
  let service: SessionRequestInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionRequestInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
