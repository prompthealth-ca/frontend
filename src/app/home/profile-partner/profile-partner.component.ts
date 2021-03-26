import { Component, OnInit, Injector, Inject, PLATFORM_ID } from '@angular/core';
// import { isPlatformServer } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeaderStatusService } from '../../shared/services/header-status.service';
import { SharedService } from '../../shared/services/shared.service';
import { Partner } from '../../models/partner';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../shared/services/category.service';

@Component({
  selector: 'app-profile-partner',
  templateUrl: './profile-partner.component.html',
  styleUrls: ['./profile-partner.component.scss']
})
export class ProfilePartnerComponent implements OnInit {

  public profile: Partner;
  public currentTabIndex: number = 0;

  public imageViewerTarget = null;
  public isDescriptionClamped = true;


  constructor(
    // @Inject(PLATFORM_ID) private platform: Object,
    // private injector: Injector,
    private _headerService: HeaderStatusService,
    private _route: ActivatedRoute,
    private _sharedService: SharedService,
    private _catService: CategoryService,
    private _toastr: ToastrService,
  ) { }

  ngOnInit() {
    // if(isPlatformServer(this.platform)){
    //   const req: any = this.injector.get('REQUEST');
    //   console.log(req.body.id);
    // }else{
    //   console.log('browser');
    // }

    this._route.params.subscribe(async params => {
      const id = params.id;

      try { await this.getProfile(id); }
      catch(err){ this._toastr.error(err); }

      if(this.profile){
        const cat = await this._catService.getCategoryAsync();
        this.profile.populateService(cat);  
      }
    });
  }


  getProfile(id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const path = 'partner/get/' + id;
      this._sharedService.getNoAuth(path).subscribe((res: any) => {
        if(res.statusCode == 200) {
          if(res.data && res.data.length > 0){
            const p = res.data[0]
            this.profile = new Partner(p);
            resolve(true);  
          }
          else{ reject('Cannot find the partner'); }
        }
        else { reject(res.message); }
      }, error => {
        console.log(error);
        reject('There are some error please try after some time.');
      });
    });
  }

  getService(id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const path = 'user/getService/' + id;
      this._sharedService.getNoAuth(path).subscribe((res: any) => {
        if(res.statusCode == 200) {

        }
      })

    });
  }

  changeTabIndex(i: number){
    this.currentTabIndex = i;
  }

  changeImageViewerTarget(i: number){
    this.imageViewerTarget = i;
  }

  toggleDescriptionLength(){ this.isDescriptionClamped = !this.isDescriptionClamped; }

  changeStickyStatus(isSticked: boolean){
    if(isSticked){
      this._headerService.hideHeader();
    }else{
      this._headerService.showHeader();
    }
  }

}
