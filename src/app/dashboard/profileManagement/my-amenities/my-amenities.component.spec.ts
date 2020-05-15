import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAmenitiesComponent } from './my-amenities.component';

describe('MyAmenitiesComponent', () => {
  let component: MyAmenitiesComponent;
  let fixture: ComponentFixture<MyAmenitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAmenitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
