import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Blog, IBlog } from 'src/app/models/blog';
import { smoothHorizontalScrolling } from 'src/app/_helpers/smooth-scroll';
import { MagazineService } from '../magazine.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public latest: Blog[] = null; 
  public latestByCategory: Blog[] = null;
  public videos: any = [];
  
  public idxCategoryActive: number = 0;
  public carouselStarted: boolean = false;
  public idxCurrentCarouselVideo: number = null;
  private timerCarouselVideo: any = null;

  @HostListener('window:resize') onWindowResize() {
    this.initCarousel();
  }

  @ViewChild('videosContainer') private videosContainer: ElementRef;
  
  constructor(
    private _magazineService: MagazineService,
  ) { }

  ngOnInit(): void {
    this.latest = [null, null, null, null];
    this.latestByCategory = [null, null, null, null, null, null, null];
    this.videos = [null, null, null];

    this._magazineService.getLatest().then((res) => {
      this.latest = res;
    });
    this._magazineService.getLatest('categoryid', 7).then((res) => {
      this.latestByCategory = res;
    })
    this.initCarousel();
  }

  onTapCategory(i: number) {
    this.idxCategoryActive = i;
  }

  initCarousel() {
    if(!window.innerWidth || window.innerWidth >= 992) {
      this.stopCarousel();
    } else {
      this.startCarousel();
    }
  }

  stopCarousel() {
    this.carouselStarted = false;
    this.idxCurrentCarouselVideo = null;
    clearInterval(this.timerCarouselVideo);
  }

  startCarousel() {
    if(!this.carouselStarted) {
      this.carouselStarted = true;
      this.idxCurrentCarouselVideo = 0;
      this.setTimerCarouselVideo();
    } else {

    }
  }

  moveVideoCarouselTo(i: number, resetTimer: boolean = true){
    if(this.videosContainer) {
      const el: HTMLElement = this.videosContainer.nativeElement;
      const w = el.clientWidth;
      const start = el.scrollLeft;
      const to = (w + 15) * i;
      const amount = to - start;

      smoothHorizontalScrolling(el, 250, amount, start);
      this.idxCurrentCarouselVideo = i;

      if(resetTimer) {
        this.setTimerCarouselVideo();        
      }
    }
  }

  setTimerCarouselVideo() {
    clearInterval(this.timerCarouselVideo);

    this.timerCarouselVideo = setInterval(() => {
      const next = (this.idxCurrentCarouselVideo + 1) % this.videos.length;
      this.moveVideoCarouselTo(next);
    }, 8000);
  }
}