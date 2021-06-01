import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validators } from 'src/app/_helpers/form-settings';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() option: IOptionSearchBar = {};
  @Output() onSubmit = new EventEmitter<SearchKeywords>()

  get f() { return this._form.controls; }
  

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
  ) { }

  private _form: FormGroup;
  public _option: OptionSearchBar;

  ngOnInit(): void {
    this._form = this._fb.group({
      searchBySituation: new FormControl(),
      searchByLocation: new FormControl(),
    });

    this._option = new OptionSearchBar(this.option);
    console.log(this._option)
  }

  _onSubmit() {
    this.onSubmit.emit({
      searchBySituation: this.f.searchBySituation.value || '',
      searchByLocation: this.f.searchByLocation.value || '',
    });

    if(this._option.navigateToListing) {
      this._router.navigate(['/practitioners']);
    }
  }

}

interface SearchKeywords {
  searchBySituation: string;
  searchByLocation: string;
}

interface IOptionSearchBar {
  navigateToListing?: boolean;
  fixAlignHorizontal?: boolean;
}

class OptionSearchBar implements IOptionSearchBar {

  get navigateToListing() { return (this.data.navigateToListing === false) ? false : true; }
  get fixAlignHorizontal() { return (this.data.fixAlignHorizontal === true) ? true : false; }
  
  constructor(private data: IOptionSearchBar){}
}