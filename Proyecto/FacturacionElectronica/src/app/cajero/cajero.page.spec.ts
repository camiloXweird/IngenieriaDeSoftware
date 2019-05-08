import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajeroPage } from './cajero.page';

describe('CajeroPage', () => {
  let component: CajeroPage;
  let fixture: ComponentFixture<CajeroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajeroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
