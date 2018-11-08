import { TestBed, inject } from '@angular/core/testing';

import { VertraegeService } from './vertraege.service';

describe('VertraegeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VertraegeService]
    });
  });

  it('should be created', inject([VertraegeService], (service: VertraegeService) => {
    expect(service).toBeTruthy();
  }));
});
