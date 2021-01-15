import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filter-dropdown',
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.scss']
})
export class FilterDropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSliderChange([min,max]: [number, number]){
    
  }
}
