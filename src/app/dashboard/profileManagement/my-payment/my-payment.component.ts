import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-my-payment',
  templateUrl: './my-payment.component.html',
  styleUrls: ['./my-payment.component.scss']
})
export class MyPaymentComponent implements OnInit {
  transactionList = [];
  currentPage;
  totalItems
  pageSize: 10
  constructor(
    private sharedService: SharedService,) { }

  ngOnInit(): void {
    this.getMyTransactions();
  }
  getMyTransactions() {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    let path = `user/get-payment-details/${userInfo._id }`;
    this.sharedService.get(path).subscribe((res: any) => {
      if (res.statusCode = 200) {
        this.transactionList =res.data;
        this.totalItems =  this.transactionList;
      } else {
        this.sharedService.checkAccessToken(res.message);
      }
    }, err => {

      this.sharedService.checkAccessToken(err);
    });

  }
}
