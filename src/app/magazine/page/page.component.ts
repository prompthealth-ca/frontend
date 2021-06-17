import { Component, OnInit } from '@angular/core';
import { MagazineService } from '../magazine.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor(
    private _magazineService: MagazineService,
  ) { }

  ngOnInit(): void {
    this._magazineService.getLatest()
  }

}
