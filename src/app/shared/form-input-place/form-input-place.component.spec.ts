import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputPlaceComponent } from './form-input-place.component';

describe('FormInputPlaceComponent', () => {
  let component: FormInputPlaceComponent;
  let fixture: ComponentFixture<FormInputPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
