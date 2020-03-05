import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUspageComponent } from './contact-uspage.component';

describe('ContactUspageComponent', () => {
  let component: ContactUspageComponent;
  let fixture: ComponentFixture<ContactUspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
