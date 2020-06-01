import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseContactComponent } from './enterprise-contact.component';

describe('EnterpriseContactComponent', () => {
  let component: EnterpriseContactComponent;
  let fixture: ComponentFixture<EnterpriseContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
