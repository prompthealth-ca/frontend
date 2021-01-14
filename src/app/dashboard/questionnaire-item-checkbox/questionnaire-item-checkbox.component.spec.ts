import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaireBacgroundComponent } from './questionaire-bacground.component';

describe('QuestionaireBacgroundComponent', () => {
  let component: QuestionaireBacgroundComponent;
  let fixture: ComponentFixture<QuestionaireBacgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionaireBacgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaireBacgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
