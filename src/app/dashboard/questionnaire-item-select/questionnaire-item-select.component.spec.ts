import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaireAgeComponent } from './questionaire-age.component';

describe('QuestionaireAgeComponent', () => {
  let component: QuestionaireAgeComponent;
  let fixture: ComponentFixture<QuestionaireAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionaireAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaireAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
