import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionPlanPartnerComponent } from './subscription-plan-partner.component';

describe('SubscriptionPlanPartnerComponent', () => {
  let component: SubscriptionPlanPartnerComponent;
  let fixture: ComponentFixture<SubscriptionPlanPartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionPlanPartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionPlanPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
