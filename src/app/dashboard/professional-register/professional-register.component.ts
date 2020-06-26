import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profession-register',
  templateUrl: './professional-register.component.html',
  styleUrls: ['./professional-register.component.scss']
})
export class ProfessionalRegisterComponent implements OnInit {
  activeTab = 'basicInfo';
  isVipAffiliateUser = true;
  public type = window.localStorage.getItem('roles');

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('isVipAffiliateUser')) == true) {
      this.isVipAffiliateUser = false
    }
    else {
      
    }
  }

  activeNextTabHandler($event: any) {
    console.log('activeNextTabHandler>>>>>', $event);
    this.activeTab = $event;
  }

}
