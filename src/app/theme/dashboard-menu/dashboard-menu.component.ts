import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss']
})
export class DashboardMenuComponent implements OnInit {

  @Input() email: string = 'dummy@gmail.com'
  @Input() name: string = 'I am dummy name';
  @Input() image: string;
  @Input() expandable: boolean = false;
  @Input() headerDirection: 'left' | 'right' = 'left';

  @Input() styleButton: any = null;
  @Input() styleMenu: any = null;
  @Input() styleHeader: any = null;
  @Input() styleBody: any = null;

  @Output() logout = new EventEmitter<void>();

  public expanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  hideBody(){ this.expanded = false; }
  toggleExpand(){ this.expanded = !this.expanded; }

  getImage(){ return this.image? 'https://api.prompthealth.ca/users/' + this.image : 'assets/img/default_user.jpg'; }
  onClickLogout(){ this.logout.emit(); }
}
