/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VerificacionServiceService } from './verificacionService.service';

describe('Service: VerificacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerificacionServiceService]
    });
  });

  it('should ...', inject([VerificacionServiceService], (service: VerificacionServiceService) => {
    expect(service).toBeTruthy();
  }));
});
