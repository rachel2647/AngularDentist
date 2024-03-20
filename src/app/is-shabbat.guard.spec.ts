import { TestBed } from '@angular/core/testing';

import { IsShabbatGuard } from './is-shabbat.guard';

describe('IsShabbatGuard', () => {
  let guard: IsShabbatGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsShabbatGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
