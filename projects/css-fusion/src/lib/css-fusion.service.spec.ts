import { TestBed } from '@angular/core/testing';

import { CssFusionService } from './css-fusion.service';

describe('CssFusionService', () => {
  let service: CssFusionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CssFusionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
