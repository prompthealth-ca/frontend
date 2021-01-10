import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDummyComponent } from './post-dummy.component';

describe('PostDummyComponent', () => {
  let component: PostDummyComponent;
  let fixture: ComponentFixture<PostDummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
