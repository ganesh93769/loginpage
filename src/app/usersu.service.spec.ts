import { TestBed } from '@angular/core/testing';

import { UsersuService } from './usersu.service';

describe('UsersuService', () => {
  let service: UsersuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
