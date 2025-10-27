/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaginaPrincipalModeradorComponent } from './pagina-principal-moderador.component';

describe('PaginaPrincipalModeradorComponent', () => {
  let component: PaginaPrincipalModeradorComponent;
  let fixture: ComponentFixture<PaginaPrincipalModeradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaPrincipalModeradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPrincipalModeradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
