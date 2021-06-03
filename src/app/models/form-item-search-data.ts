export interface IFormItemSearchData {
  id?: string;
  label?: string; /** same as item_text */
  item_text?: string; /** same as item_text */
  selectable?: boolean;
  subitems?: IFormItemSearchData[];
}

export class FormItemSearchData implements IFormItemSearchData {
  get id() { return this.data.id; }
  get label() { return this.data.label || this.data.item_text || null; }
  get selectable() { return this.data.selectable === false ? false : true; }
  get subitems() { return this._subitems; }
  get hasSubitems() { return this._subitems.length == 0 ? false : true; }

  filter(word: string): FormItemSearchData {
    const regex = new RegExp('^' + (!word ? '' : word.toLowerCase()) );
    const subFiltered = this._subitems.filter(d => {
      return (!word || word.length == 0 || d.id.toLowerCase().match(regex) || d.label.toLowerCase().match(regex)) ? true: false;
    });
    
    if(subFiltered.length > 0 || (this.selectable && (this.id.toLowerCase().match(regex) || this.label.toLowerCase().match(regex) ))) {
      return this.copyWith({subitems: subFiltered});
    }else {
      return null;
    }
  }

  copyWith(data: IFormItemSearchData): FormItemSearchData{
    return new FormItemSearchData({
      id: ('id' in data) ? data.id : this.id,
      label: ('label' in data) ? data.label : this.label,
      item_text: ('item_text' in data) ? data.item_text : this.label,
      selectable: ('selectable' in data) ? data.selectable : this.selectable,
      subitems: ('subitems' in data) ? data.subitems : this.subitems,
    });
  }


  private _subitems: FormItemSearchData[] = [];

  constructor(private data: IFormItemSearchData){
    if(data.subitems && data.subitems.length > 0) {
      const subitems = [];
      data.subitems.forEach(item => {
        subitems.push(new FormItemSearchData(item));
      });
      this._subitems = subitems;
    }
  }

}
