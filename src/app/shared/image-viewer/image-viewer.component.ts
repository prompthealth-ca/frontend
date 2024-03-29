import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { fadeAnimation } from '../../_helpers/animations';

@Component({
  selector: 'image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
  animations: [fadeAnimation]
})
export class ImageViewerComponent implements OnInit {

  @Input() data: ImageViewerData;
  @Input() target: number = 0;
  @Output() close = new EventEmitter<void>();

  get itemTarget(): ImageGroupData{ return this.imageGroups[this.target]; }

  public imageGroups: ImageGroupData[] = [];
  public thumbnails: ImageData[] = [];

  public isNavigatorShown: boolean = false;
  public targetImage: number = 0;

  private host: HTMLElement;

  constructor(_el: ElementRef) { this.host = _el.nativeElement; }

  ngOnInit(): void {
    if(!this.data.imageGroups && !this.data.images){ console.log('have to set either images or imageGroups'); }

    if(this.data.imageGroups){
      this.data.imageGroups.forEach(imageGroup => {
        this.imageGroups.push(imageGroup);
      });
    }

    if(this.data.images){
      this.data.images.forEach(image => {
        this.imageGroups.push({ images: [image] });
      });
    }
    
    this.imageGroups.forEach(group => {
      this.thumbnails.push(group.images[0]);
    });
  }

  showNavigator(){
    this.isNavigatorShown = true;
    setTimeout(()=>{
      this.isNavigatorShown = false;
    }, 5000);
  }

  goNext(){ this.goto(this.targetImage + 1); }
  goBack(){ this.goto(this.targetImage - 1); }
  goto(i: number){
    this.targetImage = i;
    const el: HTMLUListElement = this.host.querySelector('#carousel');
    el.scrollTo({top: 0, left: el.getBoundingClientRect().width * i, behavior: 'smooth'});
  }

  selectImage(i: number){ this.target = i; }
  onClose(){ this.close.emit(); }

}

export interface ImageViewerData {
  images?: ImageData[];
  imageGroups?: ImageGroupData[];
}

/** this is for products | amenities in detail page */
export interface ImageGroupData {
  images: ImageData[];
  id?: string;
  item_text?: string;
  price?: string;
  desc?: string;
}

export interface ImageData {
  url: string;
  name?: string;
  desc?: string;
}