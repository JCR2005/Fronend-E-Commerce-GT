/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaginaPrincipalAdministradorComponent } from './PaginaPrincipalAdministrador.component';

describe('PaginaPrincipalAdministradorComponent', () => {
  let component: PaginaPrincipalAdministradorComponent;
  let fixture: ComponentFixture<PaginaPrincipalAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaPrincipalAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPrincipalAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
