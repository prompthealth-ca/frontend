import { QuestionnaireAnswer } from '../dashboard/questionnaire.service';

export interface IProfessional {
  id: string;

  //general info
  name: string;  // firstname + lastname
  firstname: string;
  image: string;
  role: string;
  phone: string;
  address: string;
  rating: string | number;
  isCentre: boolean;

  //used in listingComponent
  price: string;
  location: number[]; // geo location
  distance: number;
  provideVirtual: boolean;
  mapLabel: string;
  isCheckedForCompare: boolean;

  //used in detailComponent
  reviews: any[];
  yearsOfExperience: string;
  languages: string;
  videos: Video[];
  endosements: any[]
  banner: string;
  practicePhilosophy: string;
  ageRange: string;
  organization: string;
  certification: string;

  //not used anywhere yet
  gender: string;
}

/**
 * Professional data 
 * fetched from api {user/filter} 
 * used in ListingComponent / detailComponent
*/
export class Professional implements IProfessional{
  private _rowUserData: any; /** for compatibility with old UI */
  private _rowAns: any;  /** for compatibility with old UI */
  get dataComparable(): any{
    var serviceType = [], serviceOffering = [];
    this._service.forEach(c=>{ serviceType.push(c.item_text); });
    this._serviceDelivery.forEach(c=>{ serviceOffering.push(c.item_text); });
    
    return {
      userId: this._id, 
      userData: this._rowUserData, 
      ans: this._rowAns,
      serviceData: this._typeOfProvider,
      treatmentModalities: this._treatmentModality,
      serviceType: serviceType,
      serviceOffering: serviceOffering
    }; 
  } /** for compatibility with old compare page */

  private _id: string;
  private _name: string;
  private _firstname: string;
  private _image: string;
  private _roles: string[];
  private _phone: string;
  private _ratingAvg: number;
  private _reviews: any[] = [];
  private _priceRange: number[] = [];
  private _gender: string;
  private _address: string;
  private _location: number[];
  private _distance: number;
  private _provideVirtual: boolean;
  private _videos: Video[]; 
  private _yearsOfExperience: string;
  private _practicePhilosophy: string;
  private _organization: string;
  private _certification: string;
  private _professionals: Professional[];

  private _isCheckedForCompared: boolean = false;;

  private _languagesId: string[] = [];
  private _ageRangeId: string[] = [];
  private _availabilityId: string[] = [];
  private _serviceDeliveryId: string[] = [];

  private _languages: {id: string, item_text: string}[] = [];
  private _ageRange: {id: string, item_text: string}[] = [];
  private _availability: {id: string, item_text: string}[] = [];

  private _typeOfProvider: ServiceCategory[] = [];   /** homeopath / dentist / neuropsychologist */
  private _treatmentModality: ServiceCategory[] = []; /** laser treatments / tai chi */
  private _service: ServiceCategory[] = []; /** medical care / preventative health */
  private _serviceDelivery: ServiceCategory[] = [];  /** service / exercise training / direct billing */

  private _banner: string //todo: implement correctly. currently, this property not used.
  private _endosements: any[] //todo: impliment correctly. currently, this property not used;

  get id(){ return this._id; }
  get name(){ return this._name; }
  get firstname(){ return this._firstname; }
  get image(){ return this._image; }
  get banner(){ return this._banner; }
  get role(){ return this._roles.toString(); }
  get phone(){ return this._phone; }
  get reviews(){ return this._reviews; }
  get rating(){ return this._ratingAvg; }
  get price(){ return (this._priceRange.length>1)? `$${this._priceRange[0]}+ / hr` : (this._priceRange.length == 1)? `$${this._priceRange[0]} / hr` : null; }
  get priceFull(){ return '$' + this._priceRange.join(' - ')}
  get gender(){ return this._gender; }
  get address(){ return this._address; }
  get location(){ return this._location; }
  get distance(){ return this._distance; }
  get provideVirtual(){ return this._provideVirtual; }
  get practicePhilosophy(){ return this._practicePhilosophy; }
  get videos(){ return this._videos; }
  get yearsOfExperience(){ return this._yearsOfExperience; }
  get languages(){
    var languages = [];
    this._languages.forEach(l=>{ languages.push(l.item_text); });
    return languages.join(', ');
  }
  get ageRange(){
    var ageRange = [];
    this._ageRange.forEach(a=>{ ageRange.push(a.item_text); }) 
    return ageRange.join(", "); 
  }
  get availability(){
    var availability = [];
    this._availability.forEach(a=>{ availability.push(a.item_text); }) 
    return availability.join(", "); 
  }
  get isCentre(){ return !!(this.role.toLocaleLowerCase().match(/c/)); }
  get mapLabel(){ return (this.price? this.price : 'No Price'); }
  get endosements(){ return this._endosements; }
  get organization(){ return this._organization; }
  get certification(){ return this._certification; }
  get professionals(){ return this._professionals; }

  get typeOfProvider(){
    if(this._typeOfProvider.length == 0){ return 'N/A'; }

    var types = [];
    this._typeOfProvider.forEach(type=>{ types.push(type.item_text); });
    return types.join(', ');
  }

  get treatmentModality(){
    if(this._treatmentModality.length == 0){ return 'N/A'; }

    var modalities = [];
    this._treatmentModality.forEach(modality=>{ modalities.push(modality.item_text); });
    return modalities.join(', ');
  }

  get service(){
    if(this._service.length == 0){ return 'N/A'; }
    var services = [];
    this._service.forEach(s=>{ services.push(s.item_text); })
    return services.join(', ');
  }

  get serviceDelivery(){
    if(this._serviceDelivery.length == 0){ return 'N/A'; }
    var services = [];
    this._serviceDelivery.forEach(s=>{ services.push(s.item_text); })
    return services.join(', ');
  }

  get isCheckedForCompare(){ return this._isCheckedForCompared; }
  set isCheckedForCompare(checked: boolean){ this._isCheckedForCompared = checked; } 
  uncheckForCompare(){ this._isCheckedForCompared = false; }

  constructor(id: string, p: any, ans?: any){
    var baseURLImage = 'https://api.prompthealth.ca/users/';
    this._id = id;
    this._rowUserData = p;
    this._rowAns = ans;

    var name = [];
    if(p.firstName && p.firstName.length > 0){ name.push(p.firstName); }
    if(p.lastName && p.lastName.length > 0){ name.push(p.lastName); }
    this._name = name.join(' ');

    this._firstname = p.firstName;

    this._image = (p.profileImage && p.profileImage.length > 0)? baseURLImage + p.profileImage : '/assets/img/no-image.jpg';
    this._banner = '/assets/img/professional-banner.png';

    this._roles = (typeof p.roles == 'string')? [p.roles] : p.roles;
    this._practicePhilosophy = p.product_description;

    var phone: string;
    if(!p.phone){ phone = null; }
    else if(p.phone.length == 0 ){ phone = null; }
    else if(p.phone.length == 10){ phone = `(${p.phone.slice(0,3)}) ${p.phone.slice(3,6)}-${p.phone.slice(6)}`; }
    else { phone = p.phone; }
    this._phone = phone;

    this._ratingAvg = Number(p.ratingAvg);
    this._reviews = p.ratingBy || [];
    
    var priceRange: string[] = p.price_per_hours.replace('$', '').split('-');
    priceRange.forEach((price,i)=>{ 
      var p = Number(price.trim());
      if(p > 0){ this._priceRange.push(p); }
    })

    this._gender = (p.gender && p.gender.length>0)? p.gender : 'Not Mentioned';
    this._address = p.address;
    this._videos = p.videos;
    this._yearsOfExperience = p.years_of_experience;
    this._languagesId = p.languages || [];
    this._availabilityId = p.typical_hours || [];
    this._ageRangeId = p.age_range || [];
    this._serviceDeliveryId = p.serviceOfferIds || [];
    this._location = p.location;
    this._distance = p.calcDistance;
    this._provideVirtual = p.provideVirtual;

    this._ageRange = p.age_range;
    this._organization = p.professional_organization;
    this._certification = p.certification;
  }

  populate(type: 'languages' | 'availability' | 'ageRange' | 'serviceDelivery', dataSet: QuestionnaireAnswer[]){
    this['_' + type] = []
    dataSet.forEach(a=>{
      for(var i=0; i<this['_' + type + 'Id'].length; i++){
        var id = this['_' + type + 'Id'][i];
        if(id == a._id){
          this['_' + type].push({id: id, item_text: a.item_text});
          break;
        }
      }
    });
  }

  setServiceCategory(name: string, data: ServiceCategory[]){ this['_' + name] = data; }
  setEndosements(endosements: any[]){ this._endosements = endosements; }

  sortReviewBy(i: number){
    switch(i){
      case 0: this._reviews.sort((a,b)=> b.rate - a.rate ); break; /** rate desc */
      case 1: this._reviews.sort((a,b)=> a.rate - b.rate ); break; /** rate asc */
      case 2: this._reviews.sort((a,b)=> b.updatedAt.getTime() - a.updatedAt.getTime() ); break; /** date desc */
    }

  }
}

type ServiceCategory = {
  item_text: string;
  id?: string;
  slug?: string;
  questionId?: string;
  ansId?: string;
  subAnsId?: boolean;
}

type Video = {
  _id: string,
  title: string,
  url: string;
}