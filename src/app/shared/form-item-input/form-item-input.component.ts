import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'form-item-input',
  templateUrl: './form-item-input.component.html',
  styleUrls: ['./form-item-input.component.scss']
})
export class FormItemInputComponent implements OnInit {

  @Input() name: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() disabled: boolean = false;
  @Input() submitted: boolean = false;
  @Input() prepend: string = null;
  @Input() prependIcon: string = null
  @Input() autocomplete: string = 'off';

  @Input() controller: FormControl;
  @Input() max: number = null;

  @Input() option: IFormItemTextfieldOption = {};


  public _option: FormItemTextfieldOption;

  constructor() { }

  ngOnInit(): void {
    this._option = new FormItemTextfieldOption(this.option);
    console.log(this._option)
  }
}


interface IFormItemTextfieldOption {
  transparent?: boolean;
}

class FormItemTextfieldOption {
  get transparent() { return this.data.transparent || false; }

  constructor(private data: IFormItemTextfieldOption) {}
}