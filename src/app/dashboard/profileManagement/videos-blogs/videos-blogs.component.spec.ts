import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosBlogsComponent } from './videos-blogs.component';

describe('VideosBlogsComponent', () => {
  let component: VideosBlogsComponent;
  let fixture: ComponentFixture<VideosBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
