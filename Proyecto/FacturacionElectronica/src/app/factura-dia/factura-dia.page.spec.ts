import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaDiaPage } from './factura-dia.page';

describe('FacturaDiaPage', () => {
  let component: FacturaDiaPage;
  let fixture: ComponentFixture<FacturaDiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaDiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaDiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
