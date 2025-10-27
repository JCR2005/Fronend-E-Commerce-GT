/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegistroEmpleadoService } from './registroEmpleado.service';

describe('Service: RegistroEmpleado', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistroEmpleadoService]
    });
  });

  it('should ...', inject([RegistroEmpleadoService], (service: RegistroEmpleadoService) => {
    expect(service).toBeTruthy();
  }));
});
