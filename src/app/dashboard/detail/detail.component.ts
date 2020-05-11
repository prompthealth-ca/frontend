import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {
  id: number;
  private sub: any;
  userInfo;
  serviceData;
  roles;
  constructor(
    private route: ActivatedRoute,
    private sharedService:SharedService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {

    this.roles = localStorage.getItem('roles');
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
   });
   this.getUserProfile();
  }
  getUserProfile() {
    let path = `user/get-profile/${this.id}`;
    this.sharedService.get(path).subscribe((res: any) => {
       if (res.statusCode = 200) {
        this.userInfo = res.data[0];
        console.log('this.userInfo', this.userInfo)
       } else {
         this.toastr.error(res.message);
  
       }
     }, err => {
       this.sharedService.loader('hide');
     });
  }
  getUserServices() {
    const payload = {
      user_id: this.userInfo._id,
    }
    let path = 'user/filter';
      this.sharedService.post(payload, path).subscribe((res: any) => {
        if (res.statusCode = 200) {
          this.serviceData = res.data[0];
        } else {
          this.toastr.error(res.message);
        }
      }, err => {
        this.serviceData.loader('hide');
      });
  }
}
