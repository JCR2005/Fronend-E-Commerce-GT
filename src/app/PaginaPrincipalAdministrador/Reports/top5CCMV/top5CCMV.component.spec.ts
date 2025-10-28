/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Top5CCMVComponent } from './top5CCMV.component';

describe('Top5CCMVComponent', () => {
  let component: Top5CCMVComponent;
  let fixture: ComponentFixture<Top5CCMVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top5CCMVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top5CCMVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
