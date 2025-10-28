import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { logisticaGuard } from './logistica.guard';

describe('logisticaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => logisticaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
