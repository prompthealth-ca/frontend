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
  constructor(
    private route: ActivatedRoute,
    private sharedService:SharedService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
   });
   const payload = {
    ids: [this.id],
  }
   const path = 'user/filter';
   console.log('payload', payload,path );
   this.sharedService.post(payload, path).subscribe((res: any) => {
     if (res.statusCode = 200) {
       console.log('res', res.data);
      this.userInfo = res.data;
       this.toastr.success(res.message);
     } else {
       this.toastr.error(res.message);

     }
   }, err => {
     this.sharedService.loader('hide');
   });
  }
}
