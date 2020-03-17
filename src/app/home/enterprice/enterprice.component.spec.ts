import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriceComponent } from './enterprice.component';

describe('EnterpriceComponent', () => {
  let component: EnterpriceComponent;
  let fixture: ComponentFixture<EnterpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
