import { environment } from 'src/environments/environment';
import { QuestionnaireAnswer } from '../dashboard/questionnaire.service';
import { Category } from '../shared/services/category.service';
import { SocialLinkData } from '../shared/social-buttons/social-buttons.component';
export interface IProfessional {
  id: string;

  // general info
  name: string;  // firstname + lastname
  firstname: string;
  image: string;
  role: string;
  phone: string;
  address: string;
  rating: string | number;
  isCentre: boolean;
  provideVirtual: boolean;

  // used in listingComponent
  price: string;
  location: number[]; // geo location
  distance: number;
  mapLabel: string;
  mapIcon?: any;
  isCheckedForCompare: boolean;

  // used in detailComponent
  reviews: any[];
  yearsOfExperience: string;
  languages: string[];
  videos: Video[];
  endosements: any[];
  banner: string;
  practicePhilosophy: string;
  ageRange: string[];
  organization: string;
  certification: string;

  treatmentModality: string[];
  service: string[];
  serviceDelivery: string[];
  amenity: Amenity[];
  typeOfProvider: string[];

  // not used anywhere yet
  gender: string;
}

/**
 * Professional data
 * fetched from api {user/filter}
 * used in ListingComponent / detailComponent
*/
export class Professional implements IProfessional {

  protected _baseURLImage = environment.config.AWS_S3;
  // private _baseURLImage = 'https://api.prompthealth.ca/users/';

  private _rowUserData: any; /** for compatibility with old UI */
  private _rowAns: any;  /** for compatibility with old UI */
  get dataComparable(): any {
    const serviceType = [], serviceOffering = [];
    this._service.forEach(c => { serviceType.push(c.item_text); });
    this._serviceDelivery.forEach(c => { serviceOffering.push(c.item_text); });

    return {
      userId: this._id,
      userData: this._rowUserData,
      ans: this._rowAns,
      serviceData: this._typeOfProvider,
      treatmentModalities: this._treatmentModality,
      serviceType,
      serviceOffering
    };
  } /** for compatibility with old compare page */

  private _id: string;
  private _name: string;
  private _firstname: string;
  private _image: string;
  private _roles: string[];
  private _description: string;
  private _phone: string;
  private _ratingAvg: number;
  private _reviews: Review[] = [];
  private _priceRange: number[] = [];
  private _gender: string;
  private _address: string;
  private _hideAddress: boolean;
  private _website: string;
  private _location: number[];
  private _distance: number;
  private _provideVirtual: boolean;
  private _videos: Video[];
  private _yearsOfExperience: string;
  private _practicePhilosophy: string;
  private _organization: string;
  private _certification: string;
  private _professionals: Professional[] = [];
  private _amenities: Amenity[];
  private _products: Product[];

  private _isCheckedForCompared = false;

  protected _languagesId: string[] = [];
  protected _ageRangeId: string[] = [];
  protected _availabilityId: string[] = [];
  protected _serviceDeliveryId: string[] = [];
  protected _healthStatus: ServiceCategory[] = [];

  private _languages: { id: string, item_text: string }[] = [];
  private _ageRange: { id: string, item_text: string }[] = [];
  private _availability: { id: string, item_text: string }[] = [];

  protected _typeOfProvider: ServiceCategory[] = [];   /** homeopath / dentist / neuropsychologist */
  protected _treatmentModality: ServiceCategory[] = []; /** laser treatments / tai chi */
  protected _service: ServiceCategory[] = []; /** medical care / preventative health */
  private _serviceDelivery: ServiceCategory[] = [];  /** service / exercise training / direct billing */

  private _banner: string; // todo: implement correctly. currently, this property not used.
  private _endosements: any[]; // todo: impliment correctly. currently, this property not used;
  private _socialLink: { isAvailable: boolean, data: SocialLinkData } = {
    isAvailable: false,
    data: {
      facebook: null,
      twitter: null,
      instagram: null,
      linkedin: null,
      tiktok: null,
      youtube: null,
    }
  };

  protected _allServiceId: string[];

  private _mapIconUrl: string;
  private _isMapIconReady = false;

  get id() { return this._id; }
  get name() { return this._name; }
  get firstname() { return this._firstname; }
  get image() { return this._image ? this._baseURLImage + '350x220/' + this._image + '?ver=1.0.2' : '/assets/img/no-image.jpg'; }
  get imageFull() { return this._image ? this._baseURLImage + this._image + '?ver=1.0.2' : '/assets/img/no-image.jpg'; }
  get banner() { return this._banner ? this._baseURLImage + this._banner : '/assets/img/professional-banner.png'; }
  get isVerified() { return this.p.verifiedBadge || false; } /* could be only premium account */
  get role() { return this._roles.toString(); }
  get description() { return this._description; }
  get phone() { return this._phone; }
  get reviews() { return this._reviews; }
  get rating() { return this._ratingAvg; }
  get price() {
    return (
      this._priceRange.length > 1) ? `$${this._priceRange[0]}+ / hr` :
      (this._priceRange.length === 1) ? `$${this._priceRange[0]} / hr` : null;
  }
  get priceFull() { return (this._priceRange.length === 0) ? 'N/A' : '$' + this._priceRange.join(' - '); }
  get gender() { return this._gender; }
  get address() { return (!this._hideAddress && this._address && this._address.length > 0) ? this._address : null; }
  get website() { return this._website; }
  get websiteLabel() { return this.getURLLabel(this._website); }
  get bookingUrl() { return this.p.bookingURL || null; }
  get location() { return this._location; }
  get distance() { return this._distance; }
  get provideVirtual() { return this._provideVirtual; }
  get practicePhilosophy() { return this._practicePhilosophy; }
  get videos() { return (this.p.plan && this.p.plan.videoUpload) ? this._videos : []; } /** showing videos are available only for premium user */
  get yearsOfExperience() { return this._yearsOfExperience; }
  get languages() {
    const languages = [];
    this._languages.forEach(l => { languages.push(l.item_text); });
    return languages;
  }
  get ageRange() {
    const ageRange = [];
    this._ageRange.forEach(a => { ageRange.push(a.item_text); });
    return ageRange;
  }
  get availability() {
    const result = [];
    this._availability.forEach(a => { result.push(a.item_text); });
    return result;
  }
  get isCentre() { return !!(this.role.toLocaleLowerCase().match(/c/)); }
  get isApproved() { return this.p.isApproved; }
  get endosements() { return this._endosements; }
  get organization() { return this._organization; }
  get certification() { return this._certification; }
  get title() { return this.p.professional_title || null; }
  get professionals() { return (this.p.plan && this.p.plan.ListOfProviders) ? this._professionals : []; } /** showing professional is only for premium user */

  get mapLabel() { return (this.price ? this.price : null); }
  get mapIconUrl() { return (this._mapIconUrl && this._mapIconUrl.length > 0) ? this._mapIconUrl : null; }
  get isMapIconReady() { return this._isMapIconReady; }

  get typeOfProvider() {
    const result = [];
    if (this._typeOfProvider) { this._typeOfProvider.forEach(o => { result.push(o.item_text); }); }
    return result;
  }

  get treatmentModality() {
    const result = [];
    if (this._treatmentModality) { this._treatmentModality.forEach(o => { result.push(o.item_text); }); }
    return result;
  }

  /** [ mainCategoryString, subCategoryString[] ] [] */
  get service() {
    const result = [];
    if (this._service) {
      this._service.forEach(o => {
        const cat = [];
        cat.push(o.item_text);
        if (o.hasSubAns) {
          const catSub = [];
          o.subAnsData.forEach(sub => { catSub.push(sub.item_text); });
          cat.push(catSub);
        }
        result.push(cat);
      });
    }
    return result;
  }

  get serviceDelivery() {
    const result = [];
    if (this._serviceDelivery) { this._serviceDelivery.forEach(o => { result.push(o.item_text); }); }
    return result;
  }

  get amenity() { /** showing amenity is only for premium feature */
    return (this._amenities && this._amenities.length > 0 && this.p.plan && this.p.plan.ListAmenities) ? this._amenities : [];
  }

  get amenityPreview() { /** showing amenity is only for premium feature */
    const result = [];
    if (this._amenities && this._amenities.length > 0 && this.p.plan && this.p.plan.ListAmenities) {
      this._amenities.forEach(a => { a.images.forEach(image => { result.push(image); }); });
    }
    return (result.length > 3) ? result.slice(0, 3) : result;
  }

  get product() { /** showing product is only for premium feature */
    return (this._products && this._products.length > 0 && this.p.plan && this.p.plan.ListProductsOption) ? this._products : [];
  }

  get productPreview() { /** showing product is only for premium feature */
    const result = [];
    if (this._products && this._products.length > 0 && this.p.plan && this.p.plan.ListProductsOption) {
      this._products.forEach(p => { result.push(p.images[0]); });
    }
    return (result.length > 3) ? result.slice(0, 3) : result;
  }

  get healthStatus() {
    const result = [];
    if (this._healthStatus) { this._healthStatus.forEach(o => { result.push(o.item_text); }); }
    return result;
  }

  get allServiceId() { return this._allServiceId; }

  get socialLink() { return this._socialLink; }


  get isCheckedForCompare() { return this._isCheckedForCompared; }
  set isCheckedForCompare(checked: boolean) { this._isCheckedForCompared = checked; }
  uncheckForCompare() { this._isCheckedForCompared = false; }

  getURLLabel(url: string = ''){
    let label = ''
    const match = url.match(/https?:\/\/(?:www\.)?([^/]+)/);
    if(url && match){ label = match[1]; }
    return label;
  }


  constructor(id: string, private p: any, ans?: any) {
    // console.log(p);
    this._id = id;
    this._rowUserData = p;
    this._rowAns = ans;

    const first = p.firstName || p.fname || '';
    const last = p.lastName || p.lname || '';
    const name = first + ' ' + last;
    this._name = name.trim();
    this._firstname = first;

    this._image = (p.profileImage && p.profileImage.length > 0) ? p.profileImage : (p.image && p.image.length > 0) ? p.image : null;
    this._banner = null;

    this._roles = !p.roles ? ['SP'] : (typeof p.roles === 'string') ? [p.roles] : p.roles;

    this._description = p.description || null;
    this._practicePhilosophy = p.product_description || null;

    let phone: string;
    if (!p.phone) {
      phone = null;
    } else if (p.phone.length === 0) {
      phone = null;
    } else if (p.phone.length === 10) {
      phone = `(${p.phone.slice(0, 3)}) ${p.phone.slice(3, 6)}-${p.phone.slice(6)}`;
    } else {
      phone = p.phone;
    }
    this._phone = phone;

    this._ratingAvg = p.ratingAvg ? Number(p.ratingAvg) : 0;

    const priceRange: string = p.exactPricing ? p.exactPricing.toString() : (p.price_per_hours || '');
    const priceArray: string[] = priceRange ? priceRange.replace('$', '').split('-') : [];
    priceArray.forEach((price) => {
      const p = Number(price.trim());
      if (p > 0) { this._priceRange.push(p); }
    });

    this._gender = p.gender || null;
    this._address = p.address || null;
    this._hideAddress = p.hideAddress || false;
    this._website = p.website || null;
    this._videos = p.videos || [];
    this._yearsOfExperience = p.years_of_experience || null;
    this._languagesId = p.languages || [];
    this._availabilityId = p.typical_hours || [];
    this._ageRangeId = p.age_range || [];
    this._ageRange = [];
    this._serviceDeliveryId = p.serviceOfferIds || [];
    this._location = p.location || [null, null];
    this._distance = p.calcDistance;
    this._provideVirtual = p.provideVirtual || false;

    this._organization = p.professional_organization || null;
    this._certification = p.certification || null;

    this._healthStatus = p.serviceCategories || [];
    this._allServiceId = p.services || [];

    if (p.socialLinks && p.socialLinks.length > 0 && ((p.plan && p.plan.name !== 'Basic') || p.isVipAffiliateUser)) {
      this._socialLink.isAvailable = true;
      p.socialLinks.forEach((d: { type: string; link: string }) => {
        this._socialLink.data[d.type] = d.link;
      });
    }
  }

  populate(type: 'languages' | 'availability' | 'ageRange' | 'serviceDelivery', dataSet: QuestionnaireAnswer[]) {
    this['_' + type] = [];
    dataSet.forEach(a => {
      for (let i = 0; i < this['_' + type + 'Id'].length; i++) {
        const id = this['_' + type + 'Id'][i];
        if (id == a._id) {
          this['_' + type].push({ id, item_text: a.item_text });
          break;
        }
      }
    });
  }
  populateService(dataSet: Category[]) {
    const service = [];
    dataSet.forEach(c => {
      if (this._allServiceId.indexOf(c._id) > -1) {
        const subCat = [];
        c.subCategory.forEach(cSub => {
          if (this._allServiceId.indexOf(cSub._id) > -1) {
            subCat.push({
              _id: cSub._id,
              item_text: cSub.item_text,
              isSubAns: true
            });
          }
        });
        service.push({
          _id: c._id,
          item_text: c.item_text,
          isSubAns: false,
          hasSubAns: true,
          subAnsData: subCat
        });
      }
    });
    this._service = service;
  }

  setServiceCategory(name: string, data: ServiceCategory[]) { this['_' + name] = data; }
  setEndosements(endosements: any[]) { this._endosements = endosements; }
  setProfessionals(professionals: Professional[]) { professionals.forEach(p => { this._professionals.push(p); }); }

  setAmenities(amenities: any[]) {
    const a = [];
    amenities.forEach(amenity => {
      const images: ImageData[] = [];
      amenity.images.forEach((image: string) => {
        images.push({
          url: this._baseURLImage + image,
          name: amenity.defaultamenityId.item_text
        });
      });
      a.push({
        id: amenity.defaultamenityId._id,
        item_text: amenity.defaultamenityId.item_text,
        images
      });
    });
    this._amenities = a;
  }

  setProducts(products: any[]) {
    this._products = [];
    products.forEach(p => {
      const images: ImageData[] = [];
      p.images.forEach((image: string) => {
        images.push({
          name: p.title,
          url: this._baseURLImage + image,
          desc: p.description
        });
      });
      this._products.push({
        id: p._id,
        item_text: p.title,
        desc: p.description,
        images,
        price: p.price
      });
    });
  }

  setReviews(reviews: any[]) {
    this.p.ratingBy.forEach((r0: any) => {
      for (const r1 of reviews) {
        if (r1._id == r0.bookingId) {
          const name = [];
          if (r1.customerId.firstName) { name.push(r1.customerId.firstName); }
          if (r1.customerId.lastName) { name.push(r1.customerId.lastName); }

          this._reviews.push({
            name: (name.length > 0) ? name.join(' ') : 'Anonymous',
            image: (r1.customerId.profileImage) ? this._baseURLImage + '350x220/' + r1.customerId.profileImage : '/assets/img/no-image.jpg',
            rate: r1.rating,
            review: r1.review,
            createdAt: r0.createdAt,
          });
          break;
        }
      }
    });
    this.sortReviewBy(0);
  }

  sortReviewBy(i: number) {
    switch (i) {
      case 0: this._reviews.sort((a, b) => b.rate - a.rate); break; /** rate desc */
      case 1: this._reviews.sort((a, b) => a.rate - b.rate); break; /** rate asc */
      case 2: this._reviews.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()); break; /** date desc */
    }
  }

  async setMapIcon() {
    const img = new Image;
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');
    const needLabel = !!this.mapLabel;

    const radCircle = needLabel ? 28 : 34;
    const gap = 3;
    const padding = 2;
    const paddingRight = 20;
    const hLabel = 42;

    if (needLabel) {
      ctx.fillStyle = 'black';
      ctx.font = '14px bold -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"';
      const wText = ctx.measureText(this.mapLabel).width;
      c.width = radCircle * 2 + gap + wText + padding + paddingRight;
      c.height = radCircle * 2 + padding * 2;

      ctx.beginPath();
      const x = 10;
      const y = padding + radCircle - hLabel / 2;
      const w = c.width - 10;
      const h = hLabel;
      const r = h / 2;

      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.arc(x + w - r, y + r, r, Math.PI * (3 / 2), Math.PI * (1 / 2), false);
      ctx.lineTo(x + r, y + h);
      ctx.arc(x + r, y + h - r, r, Math.PI * (1 / 2), Math.PI * (3 / 2), false);
      ctx.closePath();

      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'grey';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fill();

      ctx.fillStyle = 'black';
      ctx.font = '14px bold -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"';
      ctx.fillText(this.mapLabel, padding + radCircle * 2 + gap, padding + radCircle + 5);

    } else {
      c.width = 2 * (radCircle + padding);
      c.height = 2 * (radCircle + padding);
    }

    img.onload = () => {

      ctx.beginPath();
      ctx.arc(padding + radCircle, padding + radCircle, radCircle, 0 * Math.PI / 180, 360 * Math.PI / 180);
      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'grey';
      ctx.lineWidth = 1;
      ctx.fill();
      ctx.stroke();
      ctx.clip();

      const w = img.width;
      const h = img.height;
      const rect = (w > h) ? h : w;

      const x = (w > h) ? (w - h) / 2 : 0;
      const y = (w > h) ? 0 : (h - w) / 2;
      try {
        ctx.drawImage(img, x, y, rect, rect, padding, padding, padding + radCircle * 2, padding + radCircle * 2);

        this._mapIconUrl = c.toDataURL();
      } catch (err) {
        console.log(err);
      }
      this._isMapIconReady = true;
    };

    img.addEventListener('error', () => {
      if (!img.src.match(/assets/)) {
        img.src = '/assets/img/logo-sm.png';
      } else {
        console.log('default image for custom map icon load error.');
        this._isMapIconReady = true;
      }
    });

    img.crossOrigin = '';
    img.src = this._image ? this.image : '/assets/img/logo-sm.png';
  }
}
export interface ServiceCategory {
  item_text: string;
  id?: string;
  _id?: string;
  slug?: string;
  questionId?: string;
  ansId?: string;
  subAnsId?: boolean;
  subAns?: boolean;   /** true if this category has subcategory */
  isSubAns?: boolean; /** true if this category is subcategory */
  hasSubAns?: boolean;
  subAnsData?: ServiceCategory[];

}

interface Video {
  _id: string;
  title: string;
  url: string;
}

export interface Amenity {
  id: string;
  item_text: string;
  images: ImageData[];
}

export interface Product {
  id: string;
  item_text: string;
  images: ImageData[];
  price: number;
  desc: string;
}

export interface ImageData {
  name?: string;
  url: string;
  desc?: string;
}

export interface Review {
  name: string;
  image: string;
  rate: number;
  review: string;
  createdAt: Date;
}
