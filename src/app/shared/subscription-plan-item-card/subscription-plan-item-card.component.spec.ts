import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionPlanItemCardComponent } from './subscription-plan-item-card.component';

describe('SubscriptionPlanItemCardComponent', () => {
  let component: SubscriptionPlanItemCardComponent;
  let fixture: ComponentFixture<SubscriptionPlanItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionPlanItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionPlanItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
