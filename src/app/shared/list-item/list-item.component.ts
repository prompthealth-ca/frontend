import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() leading: string; /* icon before content */
  @Input() leadingStyle: {[k:string]: string} | string /* icon style before content */
  @Input() leadingClass: string /* icon class before content */
  @Input() action: string; /* icon after content */
  @Input() actionStyle:  {[k:string]: string} | string /* icon style after content */
  @Input() actionClass: string /* icon class before content */

  @Input() option: IListItemOption = {
    isListClickable: true,
    actionHasOriginalFunction: false,  /** if true, when user click action button, onTap does NOT emit */
  }; 

  @Output() onTap = new EventEmitter<void>();
  @Output() onTapAction = new EventEmitter<void>();

  public _option: ListItemOption;

  constructor() { }

  ngOnInit(): void {
    this._option = new ListItemOption(this.option);
  }

  _onTap(e: Event) {
    this.onTap.emit();
  }
  _onTapAction(e: Event) {
    if(this.option.actionHasOriginalFunction) {
      e.stopPropagation();
    }
    this.onTapAction.emit();
  }
}


interface IListItemOption {
  isListClickable?: boolean; /** default: true */
  actionHasOriginalFunction?: boolean; /** default: false */
}

class ListItemOption implements IListItemOption{
  private _isListClickable: boolean;
  private _actionHasOriginalFunction: boolean;

  get isListClickable() { return this._isListClickable; }
  get actionHasOriginalFunction() { return this._actionHasOriginalFunction; }

  constructor(option: IListItemOption) {
    this._isListClickable = option.isListClickable || true;
    this._actionHasOriginalFunction = option.actionHasOriginalFunction || false;
  }
}