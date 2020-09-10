import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankuPageComponent } from './thanku-page.component';

describe('ThankuPageComponent', () => {
  let component: ThankuPageComponent;
  let fixture: ComponentFixture<ThankuPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankuPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
