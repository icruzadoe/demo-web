import { TestBed } from '@angular/core/testing';

import { PublishtextService } from './publishtext.service';

describe('PublishtextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublishtextService = TestBed.get(PublishtextService);
    expect(service).toBeTruthy();
  });
});
