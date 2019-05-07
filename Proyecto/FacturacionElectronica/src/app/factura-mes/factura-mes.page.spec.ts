import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaMesPage } from './factura-mes.page';

describe('FacturaMesPage', () => {
  let component: FacturaMesPage;
  let fixture: ComponentFixture<FacturaMesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaMesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaMesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
