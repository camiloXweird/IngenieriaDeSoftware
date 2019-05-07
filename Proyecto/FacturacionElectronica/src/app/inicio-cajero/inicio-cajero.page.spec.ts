import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioCajeroPage } from './inicio-cajero.page';

describe('InicioCajeroPage', () => {
  let component: InicioCajeroPage;
  let fixture: ComponentFixture<InicioCajeroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioCajeroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioCajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
