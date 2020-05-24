import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorFilterComponent } from './doctor-filter.component';

describe('DoctorFilterComponent', () => {
  let component: DoctorFilterComponent;
  let fixture: ComponentFixture<DoctorFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
