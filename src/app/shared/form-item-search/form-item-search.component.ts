import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { id } from '@swimlane/ngx-datatable';
import { FormItemSearchData } from 'src/app/models/form-item-search-data';
import { FormItemSearchOption, FormItemTextfieldOption, IFormItemSearchOption, IFormItemTextfieldOption } from 'src/app/models/form-item-textfield-option';

@Component({
  selector: 'form-item-search',
  templateUrl: './form-item-search.component.html',
  styleUrls: ['./form-item-search.component.scss']
})
export class FormItemSearchComponent implements OnInit {

  @Input() name: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';

  @Input() searchData: FormItemSearchData[] = [];

  @Input() disabled: boolean = false;
  @Input() submitted: boolean = false;

  @Input() prepend: string = null;
  @Input() prependIcon: string = null

  @Input() autocomplete: string = 'off';
  @Input() autocapitalize: string = 'on';


  @Input() controller: FormControl;
  @Input() max: number = null;

  @Input() option: IFormItemSearchOption = {};

  @Output() onSelect = new EventEmitter<FormItemSearchData>();


  public _option: FormItemSearchOption;
  private _searchData: FormItemSearchData[];
  public _searchDataFiltered: FormItemSearchData[];

  public _idDataFocused: string = null;
  public _isSelectionsShown: boolean = false;

  @ViewChild('selections') _elSelections: ElementRef;
  @ViewChild('container') _elContainer: ElementRef;

  constructor(
    private _changeDetector: ChangeDetectorRef,
  ) { }

  onChangeFocusStatus(isFocus: boolean) {
    if(this._option.showSelectionsImmediately && isFocus) {
      this.showSelections();
    }else if(!isFocus) {
      // this._isSelectionsShown = false;
    }
  }

  onChangeValue(value: string) {
    this._isSelectionsShown = true;;
  }

  onClickOutside(e: MouseEvent | PointerEvent | TouchEvent) {
    const container = this._elContainer.nativeElement as HTMLElement;
    const path = e.composedPath()
    let isClickOutside = true;
    for(let p of path) {
      if(p === (container)){
        isClickOutside = false;
        break;
      }
    }
    if(isClickOutside) {
      this.hideSelections();
    }
  }

  // @HostListener('window:keydown', ['$event']) windowKeydown(e: KeyboardEvent) {
  //   if(this._searchData.length > 0){
  //     switch(e.key){
  //       case 'ArrowUp': 
  //       case 'ArrowLeft':
  //         e.preventDefault();
  //         this.moveSelection(this._idxDataFocused + this._searchData.length - 1)
  //         break;
  //       case 'ArrowRight':
  //       case 'ArrowDown': 
  //         e.preventDefault();
  //         this.moveSelection(this._idxDataFocused + 1);
  //         break;
  //       case 'Enter':
  //         e.preventDefault();
  //         this.selectData(this._searchData[this._idxDataFocused]);
  //         break;
	// 			case 'Escape':
	// 				e.preventDefault();
  //         this.hideSelections();
  //     }
  //   }
  // }

  ngOnInit(): void {
    this._option = new FormItemSearchOption(this.option);

    if(this.searchData.length == 0) {
      console.error('formItemSearchComponent does not work because search data is empty!');
    }else {
      const searchData = [];
      this.searchData.forEach(data => {
        searchData.push(new FormItemSearchData(data));
      });
      this._searchData = searchData;
    }

    this.controller.valueChanges.subscribe((val: string) => { this.filterData(val); });
  }

  showSelections() { 
    if(!this._isSelectionsShown) {
      this.filterData(this.controller.value);
      this._isSelectionsShown = true;
    }
  }
  hideSelections() { this._isSelectionsShown = false; }

  filterData(word?: string) {
    const filtered = [];
    this._searchData.forEach(data => {
      const d = data.filter(word);
      if(!!d) {
        filtered.push(d);
      }
    });
    this._searchDataFiltered = filtered;
  }

  // moveSelection(to: number) {
  //   this._idxDataFocused = to % this._searchData.length;

  //   const selections = this._elSelections.nativeElement;
  //   const selection = selections.nativeElement.querySelectorAll('selections li a')[this._idxDataFocused];
      
  //   const rect0 = selections.getBoundingClientRect();
  //   const rect1 = selection.getBoundingClientRect();

  //   if(rect1.bottom > rect0.bottom) { selections.scrollBy({top: rect1.top - rect0.top, left: 0, behavior: 'smooth'}); }
  //   else if(rect1.top < rect0.top) { selections.scrollBy({top: rect1.bottom - rect0.bottom, left: 0, behavior: 'smooth'}); }

  // }

  selectData(data: FormItemSearchData) {
    this.controller.setValue(data.label);
    this._idDataFocused = data.id;
    this.onSelect.emit(data);
  }
}
