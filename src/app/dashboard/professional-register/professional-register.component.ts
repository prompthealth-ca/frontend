import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profession-register',
  templateUrl: './professional-register.component.html',
  styleUrls: ['./professional-register.component.scss']
})
export class ProfessionalRegisterComponent implements OnInit {
  activeTab = 'basicInfo';
  isVipAffiliateUser;

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
    if(localStorage.getItem('isVipAffiliateUser')) {
      this.isVipAffiliateUser = false
    }
    else {
      this.isVipAffiliateUser = true
    }
  }

  activeNextTabHandler($event: any) {
    console.log('activeNextTabHandler', $event);
    this.activeTab = $event;
  }

}
