import { TestBed } from '@angular/core/testing';

import { DataholdService } from './datahold.service';

describe('DataholdService', () => {
  let service: DataholdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataholdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
