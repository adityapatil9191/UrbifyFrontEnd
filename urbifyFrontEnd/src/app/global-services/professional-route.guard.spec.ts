import { TestBed } from '@angular/core/testing';

import { ProfessionalRouteGuard } from './professional-route.guard';

describe('ProfessionalRouteGuard', () => {
  let guard: ProfessionalRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProfessionalRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
