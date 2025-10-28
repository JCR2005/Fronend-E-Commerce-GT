import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ActualizarEstadoPedidoComponent } from './actualizar-estado-pedido.component';

describe('ActualizarEstadoPedidoComponent', () => {
  let component: ActualizarEstadoPedidoComponent;
  let fixture: ComponentFixture<ActualizarEstadoPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarEstadoPedidoComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualizarEstadoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
