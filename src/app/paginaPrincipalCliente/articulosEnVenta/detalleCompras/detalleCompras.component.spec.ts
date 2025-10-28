import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { DetalleComprasComponent } from './detalleCompras.component';

describe('DetalleComprasComponent', () => {
  let component: DetalleComprasComponent;
  let fixture: ComponentFixture<DetalleComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleComprasComponent],
      providers: [provideHttpClient(), provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
