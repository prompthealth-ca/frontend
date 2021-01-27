import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'star-rate',
  templateUrl: './star-rate.component.html',
  styleUrls: ['./star-rate.component.scss']
})
export class StarRateComponent implements OnInit {

  @Input() rate: number = 0;
  @Input() margin: string = 'regular' /** regular | big | small none */
  @Input() simple: boolean = false;
  @Input() size: string = 'regular'; /** regular | big | small */
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){}

}
