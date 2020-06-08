import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAffiliateComponent } from './my-affiliate.component';

describe('MyAffiliateComponent', () => {
  let component: MyAffiliateComponent;
  let fixture: ComponentFixture<MyAffiliateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAffiliateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAffiliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
