/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Top10PMVComponent } from './Top10PMV.component';

describe('Top10PMVComponent', () => {
  let component: Top10PMVComponent;
  let fixture: ComponentFixture<Top10PMVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top10PMVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top10PMVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
