import { TestBed } from '@angular/core/testing';

import { LastWeekService } from './last-week.service';

describe('LastWeekService', () => {
  let service: LastWeekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastWeekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
