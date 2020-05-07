import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfessionalInfoComponent } from './my-professional-info.component';

describe('MyProfessionalInfoComponent', () => {
  let component: MyProfessionalInfoComponent;
  let fixture: ComponentFixture<MyProfessionalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfessionalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfessionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
