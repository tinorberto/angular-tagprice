/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrecosComponent } from './precos.component';

describe('PrecosComponent', () => {
  let component: PrecosComponent;
  let fixture: ComponentFixture<PrecosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
