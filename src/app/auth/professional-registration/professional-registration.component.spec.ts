import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalRegistrationComponent } from './professional-registration.component';

describe('ProfessionalRegistrationComponent', () => {
  let component: ProfessionalRegistrationComponent;
  let fixture: ComponentFixture<ProfessionalRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
