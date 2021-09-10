import { Component, OnInit } from '@angular/core';
import { ProfileManagementService } from 'src/app/dashboard/profileManagement/profile-management.service';
import { Booking } from 'src/app/models/booking';
import { GetQuery } from 'src/app/models/get-query';
import { IGetBookingsResult, IResponseData } from 'src/app/models/response-data';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.scss']
})
export class MyBookingComponent implements OnInit {

  get user() { return this._profileService.profile; }

  get isAvailableAsClient() { return true; }
  get isAvailableAsProvider() { return this.user.isProvider; }

  get doneInitBookingsAsClient() { return !!this.user.bookingsAsClient; }
  get doneInitBookingsAsProvider() { return !!this.user.bookingsAsProvider; }

  get bookingsAsClient() { return this.user.bookingsAsClient || []; }
  get bookingsAsProvider() { return this.user.bookingsAsProvider || []; }

  private countPerPage: number = 20;

  constructor(
    private _sharedService: SharedService,
    private _profileService: ProfileManagementService,
  ) { }

  ngOnInit(): void {
    const query = new GetQuery({count: this.countPerPage, page: (this.bookingsAsClient.length / this.countPerPage) + 1});
    this._sharedService.get('booking/get-by-client/' + this.user._id + query.toQueryParamsString()).subscribe((res: IGetBookingsResult) => {
      if(res.statusCode == 200) {
        this.user.setBookingsAsClient(res.data.data)


      } else {
        console.log(res.message);
      }
    }, error => {
      console.log(error);
    });
  }

  showDetail(booking: Booking) {
    
  }

}
