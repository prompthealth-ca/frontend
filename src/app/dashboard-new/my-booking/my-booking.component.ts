import { Component, OnInit } from '@angular/core';
import { ProfileManagementService } from 'src/app/dashboard/profileManagement/profile-management.service';
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

  public bookingsAsClient = [];
  public bookingsAsPractitioner = [];

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

}
