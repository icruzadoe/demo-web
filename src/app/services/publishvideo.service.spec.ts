import { TestBed } from '@angular/core/testing';

import { PublishvideoService } from './publishvideo.service';

describe('PublishvideoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublishvideoService = TestBed.get(PublishvideoService);
    expect(service).toBeTruthy();
  });
});
