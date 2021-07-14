import { Component, Input, OnInit } from '@angular/core';
import { SocialPost } from 'src/app/models/social-post';

@Component({
  selector: 'card-item-header',
  templateUrl: './card-item-header.component.html',
  styleUrls: ['./card-item-header.component.scss']
})
export class CardItemHeaderComponent implements OnInit {

  @Input() post: SocialPost;

  constructor() { }

  ngOnInit(): void {
  }

}
