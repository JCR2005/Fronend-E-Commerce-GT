/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Top10CCMPComponent } from './top10CCMP.component';

describe('Top10CCMPComponent', () => {
  let component: Top10CCMPComponent;
  let fixture: ComponentFixture<Top10CCMPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top10CCMPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top10CCMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
