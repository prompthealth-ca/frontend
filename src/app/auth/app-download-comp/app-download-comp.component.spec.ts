import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDownloadCompComponent } from './app-download-comp.component';

describe('AppDownloadCompComponent', () => {
  let component: AppDownloadCompComponent;
  let fixture: ComponentFixture<AppDownloadCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppDownloadCompComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDownloadCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
