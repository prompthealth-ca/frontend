import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireUserComponent } from './questionnaire-user.component';

describe('QuestionnaireUserComponent', () => {
  let component: QuestionnaireUserComponent;
  let fixture: ComponentFixture<QuestionnaireUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
