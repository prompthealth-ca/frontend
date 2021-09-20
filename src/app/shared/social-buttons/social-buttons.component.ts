import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.scss']
})
export class SocialButtonsComponent implements OnInit {

  @Input() data: SocialLinkData = {
    facebook: 'https://www.facebook.com/PromptHealth/?modal=admin_todo_tour',
    twitter: null,
    linkedin: 'https://www.linkedin.com/company/prompthealth/',
    instagram: 'https://www.instagram.com/prompthealth/',
    spotify: 'https://open.spotify.com/show/41ZlPBco8J5LNyrVE5Zg5k',
    // tiktok: 'https://www.tiktok.com/@prompthealth',
    tiktok: null,
    youtube: 'https://www.youtube.com/channel/UCnMigPMOdit9i6koo3-VSMg',
    clubhouse: 'https://www.clubhouse.com/club/prompthealth',
  }

  @Input() size: number = 40;
  @Input() margin: string = 'normal'; /** narrow (10px) | */

  @Output() clickButton = new EventEmitter<string>();

  get sizeStyle(){ 
    return {
      width: this.size + 'px',
      height: this.size + 'px',
      borderRadius: this.size + 'px',
    }
  }

  get gapClass(){ return 'gap-' + this.margin; }

  constructor() { }

  ngOnInit(): void {
  }

  onClick(type: string){
    this.clickButton.emit(type);
  }

}

export interface SocialLinkData {
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
  spotify?: string;
  tiktok: string;
  youtube: string;
  clubhouse?: string;
}