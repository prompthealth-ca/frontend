import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { QuestionnaireAnswer } from '../questionnaire.service';

@Component({
  selector: 'filter-dropdown-select',
  templateUrl: './filter-dropdown-select.component.html',
  styleUrls: ['./filter-dropdown-select.component.scss']
})
export class FilterDropdownSelectComponent implements OnInit, OnChanges {

  @Input() target: string;
  @Input() options: QuestionnaireAnswer[] = [];
  @Input() multiple = true;

  @Output() changeState = new EventEmitter<string>();

  public form: FormGroup;

  constructor(
    private _fb: FormBuilder,
  ) { }

  ngOnChanges(e: SimpleChanges) {
    if (e.target && e.target.currentValue && e.target.currentValue != e.target.previousValue) {
      this.initForm();
    }
  }

  ngOnInit(): void {
  }

  initForm() {
    if (this.multiple) {
      const formCheckbox = new FormArray([]);
      this.options.forEach(o => { formCheckbox.push(new FormControl(o.active)); });
      this.form = this._fb.group({ checkbox: formCheckbox });

    } else {
      let selected: QuestionnaireAnswer = null;
      for (let i = 0; i < this.options.length; i++) {
        if (this.options[i].active) { selected = this.options[i]; break; }
      }
      this.form = this._fb.group({ radio: new FormControl((selected ? selected._id : '')) });
    }
  }

  changeStateRadio(idx: number) {
    this.options.forEach((o, i) => {
      if (i === idx) { this.options[i].active = true; } else { this.options[i].active = false; }
    });
  }

  changeStateCheckbox(idx: number) {
    this.options[idx].active = !this.options[idx].active;
  }

  reset() {
    this.options.forEach(o => { o.active = false; });
    this.changeState.emit(this.target);
  }
  save() { this.changeState.emit(this.target); }

}
