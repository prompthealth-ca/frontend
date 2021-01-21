import { QuestionnaireAnswer } from '../dashboard/questionnaire.service';

export interface IProfessional {
  id: string;
  name: string;  // firstname + lastname
  firstname: string;
  image: string;
  role: string;
  phone: string;
  rating: number;
  price: string;
  gender: string;
  address: string;
  location: number[];
  languages: string[];
  isCentre: boolean;
  distance: number;
  provideVirtual: boolean;
  mapLabel: string;
  isCheckedForCompare: boolean;
}

/**
 * Professional data 
 * fetched from api {user/filter} 
 * used in ListingComponent 
*/
export class Professional implements IProfessional{
  private _rowUserData: any; /** for compatibility with old UI */
  private _rowAns: any;  /** for compatibility with old UI */
  get dataComparable(): any{
    var serviceType = [], serviceOffering = [];
    this._service.forEach(c=>{ serviceType.push(c.item_text); });
    this._serviceOffering.forEach(c=>{ serviceOffering.push(c.item_text); });
    
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
  private _role: string;
  private _phone: string;
  private _rating: number;
  private _priceRange: number[] = [];
  private _gender: string;
  private _address: string;
  private _location: number[];
  private _distance: number;
  private _provideVirtual: boolean;
  private _languagesId: string[] = [];
  private _languages: {id: string, item_text: string}[] = [];

  private _isCheckedForCompared: boolean = false;;

  private _typeOfProvider: ServiceCategory[] = [];   /** homeopath / dentist / neuropsychologist */
  private _treatmentModality: ServiceCategory[] = []; /** laser treatments / tai chi */
  private _service: ServiceCategory[] = []; /** medical care / preventative health */
  private _serviceOffering: ServiceCategory[] = [];  /** service / exercise training */

  get id(){ return this._id; }
  get name(){ return this._name; }
  get firstname(){ return this._firstname; }
  get image(){ return this._image; }
  get role(){ return this._role; }
  get phone(){ return this._phone; }
  get rating(){ return Math.round(this._rating * 10) / 10; }
  get price(){ return (this._priceRange.length>1)? `$${this._priceRange[0]}+ / hr` : (this._priceRange.length == 1)? `$${this._priceRange[0]} / hr` : null; }
  get gender(){ return this._gender; }
  get address(){ return this._address; }
  get location(){ return this._location; }
  get distance(){ return this._distance; }
  get provideVirtual(){ return this._provideVirtual; }
  get languages(){
    var languages = [];
    this._languages.forEach(l=>{ languages.push(l.item_text); });
    return languages;
  }
  get isCentre(){ return !!(this.role.toLocaleLowerCase() == 'c'); }
  get mapLabel(){ return (this.price? this.price : 'No Price'); }

  get isCheckedForCompare(){ return this._isCheckedForCompared; }
  set isCheckedForCompare(checked: boolean){ this._isCheckedForCompared = checked; }
  uncheckForCompare(){ this._isCheckedForCompared = false; }

  constructor(id: string, p: any, ans?: any){
    var baseURLImage = 'https://api.prompthealth.ca/';
    this._id = id;
    this._rowUserData = p;
    this._rowAns = ans;

    var name = [];
    if(p.firstName && p.firstName.length > 0){ name.push(p.firstName); }
    if(p.lastName && p.lastName.length > 0){ name.push(p.lastName); }
    this._name = name.join(' ');

    this._firstname = p.firstName;

    this._image = (p.profileImage && p.profileImage.length > 0)? baseURLImage + p.profileImage : '/assets/img/no-image.jpg';
    this._role = p.roles;

    var phone: string;
    if(!p.phone){ phone = null; }
    else if(p.phone.length == 0 ){ phone = null; }
    else if(p.phone.length == 10){ phone = `(${p.phone.slice(0,3)}) ${p.phone.slice(3,6)}-${p.phone.slice(6)}`; }
    else { phone = p.phone; }
    this._phone = phone;

    this._rating = Number(p.ratingAvg);
    // this._rating = Math.floor( Math.random() * 5 );
    
    var priceRange: string[] = p.price_per_hours.replace('$', '').split('-');
    priceRange.forEach((price,i)=>{ 
      var p = Number(price.trim());
      if(p > 0){ this._priceRange.push(p); }
    })

    this._gender = (p.gender && p.gender.length>0)? p.gender : 'Not Mentioned';
    this._address = p.address;
    this._languagesId = p.languages;
    this._location = p.location;
    this._distance = p.calcDistance;
    this._provideVirtual = p.provideVirtual;
  }

  setLanguageString(languageSet: QuestionnaireAnswer[]){
    this._languages = [];
    languageSet.forEach(a=>{
      for(var i=0; i<this._languagesId.length; i++){
        var id = this._languagesId[i];
        if(id == a._id){
          this._languages.push({id: id, item_text: a.item_text});
          break;
        }
      }
    });
  }

  setServiceCategory(name: string, data: ServiceCategory[]){ this['_' + name] = data; }
}

type ServiceCategory = {
  slug: string;
  questionId: string;
  ansId: string;
  item_text: string;
  subAnsId: boolean;
}