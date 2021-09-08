import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookmarkComponent } from './my-bookmark.component';

describe('MyBookmarkComponent', () => {
  let component: MyBookmarkComponent;
  let fixture: ComponentFixture<MyBookmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBookmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
