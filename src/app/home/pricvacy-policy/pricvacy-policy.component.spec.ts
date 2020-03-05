import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricvacyPolicyComponent } from './pricvacy-policy.component';

describe('PricvacyPolicyComponent', () => {
  let component: PricvacyPolicyComponent;
  let fixture: ComponentFixture<PricvacyPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricvacyPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricvacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
