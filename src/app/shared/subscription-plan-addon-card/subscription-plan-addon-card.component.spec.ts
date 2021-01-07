import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionPlanAddonCardComponent } from './subscription-plan-addon-card.component';

describe('SubscriptionPlanAddonCardComponent', () => {
  let component: SubscriptionPlanAddonCardComponent;
  let fixture: ComponentFixture<SubscriptionPlanAddonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionPlanAddonCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionPlanAddonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
