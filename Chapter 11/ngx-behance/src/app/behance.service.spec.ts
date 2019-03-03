import { TestBed } from '@angular/core/testing';

import { BehanceService } from './behance.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BehanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: BehanceService = TestBed.get(BehanceService);
    expect(service).toBeTruthy();
  });
});
