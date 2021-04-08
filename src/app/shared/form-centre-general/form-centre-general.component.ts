import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IUserDetail } from 'src/app/models/user-detail';
import { minmax, pattern, validators } from 'src/app/_helpers/form-settings';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'form-centre-general',
  templateUrl: './form-centre-general.component.html',
  styleUrls: ['./form-centre-general.component.scss']
})
export class FormCentreGeneralComponent implements OnInit {

  @Input() data: IUserDetail = {};
  @Input() disabled = false;
  
  @Output() submitForm = new EventEmitter<IUserDetail>();

  get f() { return this.form.controls; }
  get fAgeRangeList() { return (this.f.age_range as FormArray).controls; }
  get fTypicalHourList() { return (this.f.typical_hours as FormArray).controls; }
  get fLanguageList() { return (this.f.languages as FormArray).controls; }
  get fServiceOfferList() { return (this.f.serviceOfferIds as FormArray).controls; }

  public form: FormGroup;
  public isSubmitted = false;
  public isGooglePlaceSelected = false;

  public maxName = minmax.nameMax;
  public maxProfessionalTitle = minmax.professionalTitleMax;
  public maxTextarea = minmax.textareaMax;
  public ageRangeList = ageRangeList;
  public experienceList = experienceList;
  public businessList = businessList;
  public serviceOfferList: SelectionItem[];
  public typicalHourList: SelectionItem[];
  public languageList: SelectionItem[];
  public priceRangeList = priceRangeList;

  constructor(
    private _fb: FormBuilder,
    private _sharedService: SharedService,
    private _toastr: ToastrService,
    private _changeDetector: ChangeDetectorRef,
  ) { }


  async ngOnInit() {

    try { await this.getQuestions(); }
    catch(error){ this._toastr.error(error); }

    this.form = this._fb.group({
      firstName: new FormControl(this.data.firstName ? this.data.firstName : '', validators.nameCentre),
      userType: new FormControl('Centre'),
      email: new FormControl(this.data.email ? this.data.email : '', validators.email),
      phone: new FormControl(this.data.phone ? this.data.phone : '', validators.phone),
      
      address: new FormControl(this.data.address ? this.data.address : '', validators.address),
      latitude: new FormControl((this.data.location && this.data.location[1]) ? this.data.location[1] : 0 ),
      longitude: new FormControl((this.data.location && this.data.location[0]) ? this.data.location[0] : 0 ),
      city: new FormControl(this.data.city ? this.data.city : '' ),
      state: new FormControl( this.data.state ? this.data.state : '' ),
      zipcode: new FormControl( this.data.zipcode ? this.data.zipcode : '' ),
      placeId: new FormControl( this.data.placeId ? this.data.placeId : '' ),
      hideAddress: new FormControl( this.data.hideAddress ? this.data.hideAddress : false ),

      website: new FormControl( this.data.website ? this.data.website : '', validators.website),
      professional_title: new FormControl( this.data.professional_title ? this.data.professional_title : '', validators.professionalTitle),
      bookingURL: new FormControl( this.data.bookingURL ? this.data.bookingURL : '', validators.bookingURL),
      
      typical_hours: new FormArray([], validators.typicalHours),
      languages: new FormArray([]),
      serviceOfferIds: new FormArray([]),

      age_range: new FormArray([], validators.ageRange),
      years_of_experience: new FormControl( this.data.years_of_experience ? this.data.years_of_experience : ''),

      priceMode: new FormControl( this.data.exactPricing ? 'input' : 'select'),
      exactPricing: new FormControl( this.data.exactPricing ? this.data.exactPricing : '', validators.exactPricing),
      price_per_hours: new FormControl( this.data.price_per_hours ? this.data.price_per_hours : ''),

      business_kind: new FormControl( this.data.business_kind ? this.data.business_kind : '', validators.businessKind),

      product_description: new FormControl( this.data.product_description ? this.data.product_description : '', validators.productDescription),
    });

    ageRangeList.forEach(item => {
      (this.form.controls.age_range as FormArray).push( new FormControl( (this.data.age_range && this.data.age_range.includes(item.value) ? true : false ) ) );
    });

    this.typicalHourList.forEach(item => {
      (this.form.controls.typical_hours as FormArray).push( new FormControl( (this.data.typical_hours && this.data.typical_hours.includes(item.value) ? true : false ) ));
    });

    this.languageList.forEach(item => {
      (this.form.controls.languages as FormArray).push( new FormControl( (this.data.languages && this.data.languages.includes(item.value) ? true : false ) ));
    });

    this.serviceOfferList.forEach(item => {
      (this.form.controls.serviceOfferIds as FormArray).push( new FormControl( (this.data.serviceOfferIds && this.data.serviceOfferIds.includes(item.value) ? true : false ) ));
    });

    /** set validator for price */
    if(this.f.priceMode.value == 'input') {
      this.f.exactPricing.setValidators(validators.exactPricingRequired);
    }else{
      this.f.exactPricing.setValidators(validators.exactPricing);
      this.f.price_per_hours.setValidators(Validators.required);
    }
    this.f.priceMode.valueChanges.subscribe(value=>{
      if(value == 'input'){
        this.f.exactPricing.setValidators(validators.exactPricingRequired);
        this.f.price_per_hours.clearValidators();
      }else{
        this.f.price_per_hours.setValidators(Validators.required);
        this.f.exactPricing.setValidators(validators.exactPricing);
      }
    });
  }

  async getQuestions(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const path = `questionare/get-profile-questions`;
      this._sharedService.getNoAuth(path).subscribe((res: any) => {
        if (res.statusCode === 200) {
          res.data.forEach((element: any) => {
            const selectionList: SelectionItem[] = [];
            element.answers.forEach((a: any) => {
              selectionList.push({
                id: a._id,
                label: a.item_text,
                value: a._id
              });
            });
  
            switch(element.slug){
              case 'offer-your-services': this.serviceOfferList = selectionList; break;
              case 'languages-you-offer': this.languageList = selectionList; break;
              case 'typical-hours': this.typicalHourList = selectionList; break;
            }
          });
          resolve(true);  
        } else {
          reject(res.message);
        }
      }, err => {
        console.log(err);
        reject('There are some errors, please try again after some time !');
      });
    })
  }

  onChangePlace() {
    this._changeDetector.detectChanges();
  }

  onSubmit(){
    this.isSubmitted = true;
    if(this.form.invalid){
      this._toastr.error('There are some items that require your attention.');
      return;
    }


    /** format pricePerHours and exactPricing */
    if(this.f.priceMode.value == 'input'){
      const price = Number(this.f.exactPricing.value);
      for(let p of priceRangeList){
        if(p.minmax[0] <= price && price <= p.minmax[1]){
          this.f.price_per_hours.setValue(price);
        }
      }
    }else{
      this.f.exactPricing.setValue('');
    }

    const data: IUserDetail = {};
    data._id = this.data._id;
    for(const key in this.form.controls){
      const f = this.form.controls[key];
      if(key == 'priceMode'){
        //nothing to do
      }else if(f instanceof FormControl){
        data[key] = f.value;
      }else if(f instanceof FormArray) {
        const value = [];
        let list: SelectionItem[];
        switch(key){
          case 'typical_hours': list = this.typicalHourList; break;
          case 'languages': list = this.languageList; break;
          case 'serviceOfferIds': list = this.serviceOfferList; break;
          case 'age_range': list = ageRangeList; break;
        }
        (f.value as boolean[]).forEach((isSelected, i) => {
          if(isSelected){
            value.push(list[i].value);
          }
        });
        data[key] = value;
      }
    }

    this.submitForm.emit(data);
  }
}

interface SelectionItem {
  id: string;
  label: string;
  value: string;
  minmax?: number[];
}

const ageRangeList: SelectionItem[] = [
  { id: 'age1', label: 'Not Critical', value: '5eb1a4e199957471610e6cd7'  },
  { id: 'age2', label: 'Child (<12)', value: '5eb1a4e199957471610e6cd8' },
  { id: 'age3', label: 'Adolescent (12-18)', value: '5eb1a4e199957471610e6cd9' },
  { id: 'age4', label: 'Adult (18+)', value: '5eb1a4e199957471610e6cda' },
  { id: 'age5', label: 'Senior (>64)', value: '5eb1a4e199957471610e6cdb' },
];
const experienceList: SelectionItem[] = [
  { id: 'exp1', label: '<5 Years', value: '< 5' },
  { id: 'exp2', label: '5-10 Years', value: '5-10' },
  { id: 'exp3', label: '10-20 Years', value: '10-20' },
  { id: 'exp4', label: '>20 Years', value: '> 20' },
];
const priceRangeList: SelectionItem[] = [
  { id: 'price1', label: 'Not Critical', value: 'Not Critical', minmax: [-100, 0] },
  { id: 'price2', label: '< $50', value: '< $50', minmax: [0, 50] },
  { id: 'price3', label: '$50-100', value: '$50-100', minmax: [50, 100] },
  { id: 'price4', label: '$100-200', value: '$100-200', minmax: [100, 200] },
  { id: 'price5', label: '$200-500', value: '$200-500', minmax: [200, 500] },
  { id: 'price6', label: '$500-1000', value: '$500-1000', minmax: [500, 1000] },
  { id: 'price7', label: '> $1000', value: '$1000', minmax: [1000, 1000000] },
];
const businessList: SelectionItem[] = [
  { id: 'business1', label: 'Clinic', value: 'clinic' },
  { id: 'business2', label: 'Health Center', value: 'health_center' },
  { id: 'business3', label: 'Health Club', value: 'health_club' },
  { id: 'business4', label: 'Gym', value: 'gym' },
  { id: 'business5', label: 'Studio', value: 'studio' },
  { id: 'business6', label: 'Pharmacy', value: 'pharmacy' },
];