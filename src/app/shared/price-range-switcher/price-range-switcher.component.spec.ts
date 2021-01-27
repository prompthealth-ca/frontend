import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceRangeSwitcherComponent } from './price-range-switcher.component';

describe('PriceRangeSwitcherComponent', () => {
  let component: PriceRangeSwitcherComponent;
  let fixture: ComponentFixture<PriceRangeSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceRangeSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceRangeSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
