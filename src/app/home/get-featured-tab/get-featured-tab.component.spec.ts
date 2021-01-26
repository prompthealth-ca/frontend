import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFeaturedTabComponent } from './get-featured-tab.component';

describe('GetFeaturedTabComponent', () => {
  let component: GetFeaturedTabComponent;
  let fixture: ComponentFixture<GetFeaturedTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetFeaturedTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFeaturedTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
