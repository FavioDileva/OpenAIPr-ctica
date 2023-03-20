import { TestBed } from '@angular/core/testing';

import { ImagesGenerationService } from './images-generation.service';

describe('ImagesGenerationService', () => {
  let service: ImagesGenerationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesGenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
