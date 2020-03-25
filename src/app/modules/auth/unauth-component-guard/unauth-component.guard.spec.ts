import { TestBed } from '@angular/core/testing';

import { UnauthComponentGuard } from './unauth-component.guard';

describe('UnauthComponentGuard', () => {
  let guard: UnauthComponentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnauthComponentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
