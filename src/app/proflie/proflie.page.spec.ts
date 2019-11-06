import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfliePage } from './proflie.page';

describe('ProfliePage', () => {
  let component: ProfliePage;
  let fixture: ComponentFixture<ProfliePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfliePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfliePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
