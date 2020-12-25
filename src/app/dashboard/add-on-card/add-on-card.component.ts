import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-on-card',
  templateUrl: './add-on-card.component.html',
  styleUrls: ['./add-on-card.component.scss']
})
export class AddOnCardComponent implements OnInit {
  @Input() addOn: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
