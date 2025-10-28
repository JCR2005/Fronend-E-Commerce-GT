import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { moderadorGuard } from './moderador.guard';

describe('moderadorGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => moderadorGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
