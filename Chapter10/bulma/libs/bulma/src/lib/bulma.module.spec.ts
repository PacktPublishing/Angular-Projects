import { async, TestBed } from '@angular/core/testing';
import { BulmaModule } from './bulma.module';

describe('BulmaModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BulmaModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BulmaModule).toBeDefined();
  });
});
