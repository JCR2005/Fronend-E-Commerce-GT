/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SolicitudServiceService } from '../solicitudService.service';

describe('Service: SolicitudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolicitudServiceService]
    });
  });

  it('should ...', inject([SolicitudServiceService], (service: SolicitudServiceService) => {
    expect(service).toBeTruthy();
  }));
});
