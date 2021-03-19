import { TestBed } from '@angular/core/testing';

import { RouteHelperService } from './route-helper.service';

describe('RouteHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteHelperService = TestBed.get(RouteHelperService);
    expect(service).toBeTruthy();
  });
});
