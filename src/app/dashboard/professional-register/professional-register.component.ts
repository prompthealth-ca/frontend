import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profession-register',
  templateUrl: './professional-register.component.html',
  styleUrls: ['./professional-register.component.scss']
})
export class ProfessionalRegisterComponent implements OnInit {
  activeTab = 'basicInfo';
  isVipAffiliateUser :boolean = false;
  public type = window.localStorage.getItem('roles');

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('isVipAffiliateUser')) == true) {
      this.isVipAffiliateUser = true;
    }
    else {
      this.isVipAffiliateUser = false;
    }
  }

  activeNextTabHandler($event: any) {
    this.activeTab = $event;
  }

}
