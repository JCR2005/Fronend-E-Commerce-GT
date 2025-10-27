/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListaArticulosService } from './listaArticulos.service';

describe('Service: ListaArticulos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaArticulosService]
    });
  });

  it('should ...', inject([ListaArticulosService], (service: ListaArticulosService) => {
    expect(service).toBeTruthy();
  }));
});
