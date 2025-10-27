/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarrteaComponent } from './carrtea.component';

describe('CarrteaComponent', () => {
  let component: CarrteaComponent;
  let fixture: ComponentFixture<CarrteaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrteaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrteaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
