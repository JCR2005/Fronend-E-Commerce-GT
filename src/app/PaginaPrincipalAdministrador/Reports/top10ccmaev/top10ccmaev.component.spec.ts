/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Top10ccmaevComponent } from './top10ccmaev.component';

describe('Top10ccmaevComponent', () => {
  let component: Top10ccmaevComponent;
  let fixture: ComponentFixture<Top10ccmaevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top10ccmaevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top10ccmaevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
