/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VentasClienteService } from './ventas-cliente.service';

describe('Service: PublicarArtuculo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VentasClienteService]
    });
  });

  it('should ...', inject([VentasClienteService], (service: VentasClienteService) => {
    expect(service).toBeTruthy();
  }));
});
