import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserDetail } from 'src/app/models/user-detail';
import { SharedService } from 'src/app/shared/services/shared.service';
import { environment } from 'src/environments/environment';

declare let gtag: Function;

@Component({
  selector: 'app-landing-ambassador',
  templateUrl: './landing-ambassador.component.html',
  styleUrls: ['./landing-ambassador.component.scss']
})
export class LandingAmbassadorComponent implements OnInit {

  // public ambassadorCode = 'fyCfz2Hm';
  public faceType: FaceType = null;
  public practitionerName: string =" ";
  public practitionerId: string;
  public user: IUserDetail;
  public isLinkCopied: boolean = false;

  private canvas: HTMLElement;
  private disableAnalytics: boolean = environment.config.disableAnalytics;

  @ViewChild('referralLink') private elLink: ElementRef;

  @HostListener('window:scroll') windowScroll(){
    if(this.canvas){
      this.canvas.style.top = Math.floor(window.scrollY * 2 / 3) + 'px';
    }
  }

  constructor(
    private _el: ElementRef,
    private _sharedService: SharedService,
    private _route: ActivatedRoute,
    private _changeDetector: ChangeDetectorRef,
    private _router: Router,
  ) { 
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    
    this.canvas = this._el.nativeElement.querySelector('.canvas');

    this._route.data.subscribe((data: {type: FaceType})=> {
      this.faceType = data.type;

      // if(data.type == 'practitioner'){
      //   this.setCouponDetail(this.ambassadorCode);
      // }
    });

    this._route.queryParams.subscribe((data: {id: string})=>{
      if(data.id && this.faceType == 'client'){
        this.practitionerId = data.id;
        this.getUserDetail();
      }
    });
  }
  
  copyLink() {
    const el: HTMLInputElement = this.elLink.nativeElement;
    el.select();
    el.setSelectionRange(0, 9999);
    document.execCommand('copy');
    this.isLinkCopied = true;

    setTimeout(()=>{
      this.isLinkCopied = false;
      this._changeDetector.detectChanges();
    }, 3000)
  }

  // setCouponDetail(code: string) {
  //   this._sharedService.get('user/get-coupon/' + code).subscribe((res: any) => {
  //     if(res.statusCode === 200){
  //       sessionStorage.setItem('stripe_coupon_code', JSON.stringify(res.data));
  //     }else {
  //       console.log(res.message);
  //     }
  //   }, error => {
  //     console.log(error);
  //   });
  // }

  getUserDetail() {
    const path = `user/get-profile/${this.practitionerId}`;
    this._sharedService.getNoAuth(path).subscribe((res: any) => {
      if(res.statusCode === 200) {
        const provider: IUserDetail = res.data[0];
        if(provider.roles != 'U') {
          this.practitionerName = provider.firstName;
        }else{
          this.navigate404();
        }
      }else{
        this.navigate404();
        console.log(res.message);
      }
    }, err => {
      this.navigate404();
      console.log(err);
    });
  }

  navigate404(){
    this._router.navigate(['/404']);
  }

  countup(){
    if(!this.disableAnalytics){
      gtag(
        'event', 
        'click', 
        {
          'event_category': 'link',
          'event_label': 'ambassador_' + this.practitionerId,
          'value': '1'
        }
      );  
    }
  }
}

type FaceType = 'client' | 'provider';