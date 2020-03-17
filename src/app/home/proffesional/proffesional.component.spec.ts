import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProffesionalComponent } from './proffesional.component';

describe('ProffesionalComponent', () => {
  let component: ProffesionalComponent;
  let fixture: ComponentFixture<ProffesionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProffesionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProffesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
