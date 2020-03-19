import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionProfessionalComponent } from './subscription-professional.component';

describe('SubscriptionProfessionalComponent', () => {
  let component: SubscriptionProfessionalComponent;
  let fixture: ComponentFixture<SubscriptionProfessionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionProfessionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
