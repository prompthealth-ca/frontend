export interface IFormItemTextfieldOption {
  transparent?: boolean;
}

export class FormItemTextfieldOption {
  get transparent() { return this.data.transparent || false; }

  constructor(protected data: IFormItemTextfieldOption) {}
}


export interface IFormItemSearchOption extends IFormItemTextfieldOption {
  showSelectionsImmediately?: boolean
  inputable?: boolean;
}

export class FormItemSearchOption extends FormItemTextfieldOption implements IFormItemSearchOption {
  get showSelectionsImmediately() { return this.data.showSelectionsImmediately || false; }
  get inputable() { return this.data.inputable === false ? false : true; }

  constructor(protected data: IFormItemSearchOption) {
    super(data);
  }
}