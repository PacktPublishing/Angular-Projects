import { TestBed } from '@angular/core/testing';

import { WordpressService } from './wordpress.service';

describe('WordpressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordpressService = TestBed.get(WordpressService);
    expect(service).toBeTruthy();
  });
});
