import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'subscription-plan-addon-card',
  templateUrl: './subscription-plan-addon-card.component.html',
  styleUrls: ['./subscription-plan-addon-card.component.scss']
})
export class SubscriptionPlanAddonCardComponent implements OnInit {

  @Input() type: string /* op1 */
  @Input() data: any;
  @Input() isPriceMonthly: boolean = true;

  @Output() select = new EventEmitter<string>(); /* op1 | op2 */

  public isLoggedIn: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('token')) { this.isLoggedIn = true; }
  }

  getTabName(){
    var name: string = 'monthly';
    if(this.data){
      name = `$${this.isPriceMonthly? (this.data.price + '/Monthly') : (this.data.yearlyPrice + '/Annualy')}`;
    }
    return name;
  }

  getLinkToSignin(){
    /** todo: add code  */
    var link = ['/auth', 'registration', 'sp']
    return link;
  }

  triggerButtonClick(){ this.select.emit(this.type); }

}
