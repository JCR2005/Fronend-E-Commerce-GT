/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearArticuloVentaComponent } from './CrearArticuloVenta.component';

describe('CrearArticuloVentaComponent', () => {
  let component: CrearArticuloVentaComponent;
  let fixture: ComponentFixture<CrearArticuloVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearArticuloVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearArticuloVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
