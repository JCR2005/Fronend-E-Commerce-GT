import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMisArticuloPublicadosComponent } from './ver-mis-articulo-publicados.component';

describe('VerMisArticuloPublicadosComponent', () => {
  let component: VerMisArticuloPublicadosComponent;
  let fixture: ComponentFixture<VerMisArticuloPublicadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerMisArticuloPublicadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerMisArticuloPublicadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
