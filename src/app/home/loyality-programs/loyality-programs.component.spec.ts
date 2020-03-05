import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyalityProgramsComponent } from './loyality-programs.component';

describe('LoyalityProgramsComponent', () => {
  let component: LoyalityProgramsComponent;
  let fixture: ComponentFixture<LoyalityProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoyalityProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyalityProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
