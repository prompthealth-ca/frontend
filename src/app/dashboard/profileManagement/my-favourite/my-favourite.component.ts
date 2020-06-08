import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-favourite',
  templateUrl: './my-favourite.component.html',
  styleUrls: ['./my-favourite.component.scss']
})
export class MyFavouriteComponent implements OnInit {

  constructor() { }

  doctorsListing= [1,2,3];

  ngOnInit(): void {
  }

}
