/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Top5CCMGComponent } from './Top5CCMG.component';

describe('Top5CCMGComponent', () => {
  let component: Top5CCMGComponent;
  let fixture: ComponentFixture<Top5CCMGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top5CCMGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top5CCMGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
