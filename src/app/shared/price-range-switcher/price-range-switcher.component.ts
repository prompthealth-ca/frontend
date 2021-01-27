import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'price-range-switcher',
  templateUrl: './price-range-switcher.component.html',
  styleUrls: ['./price-range-switcher.component.scss']
})
export class PriceRangeSwitcherComponent implements OnInit {

  @Output() change = new EventEmitter<boolean>();
  public isMonthly: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(){
    this.isMonthly = !this.isMonthly;
    this.change.emit(this.isMonthly)
  }
}
