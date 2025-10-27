/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CompraArticuloComponent } from './compraArticulo.component';

describe('CompraArticuloComponent', () => {
  let component: CompraArticuloComponent;
  let fixture: ComponentFixture<CompraArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraArticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
