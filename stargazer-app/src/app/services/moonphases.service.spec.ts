import { TestBed } from '@angular/core/testing';

import { MoonphasesService } from './moonphases.service';

describe('MoonphasesService', () => {
  let service: MoonphasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoonphasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
