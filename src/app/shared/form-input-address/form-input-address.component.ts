import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'form-input-address',
  templateUrl: './form-input-address.component.html',
  styleUrls: ['./form-input-address.component.scss']
})
export class FormInputAddressComponent implements OnInit {

  @Input() name: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() submitted: boolean = false;
  @Input() controller: FormControl;

  @Output() selectAddress = new EventEmitter<AddressData>();

  public place: AddressData = null;

  private host: HTMLElement;

  constructor(
    private _maps: MapsAPILoader,
    private _changeDetector: ChangeDetectorRef,
    _el: ElementRef,
  ) { 
    this.host = _el.nativeElement;
  }

  ngOnInit(): void {
    this._maps.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.host.querySelector('#' + this.name));
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        this.setAddress(place);
      });
    });
  }

  setAddress(p: google.maps.places.PlaceResult){
    if(p.geometry){
      this.place = {
        location: { lat: p.geometry.location.lat(), lng: p.geometry.location.lng() },
        address: p.name, 
        city: null,
        state: null,
        zipcode: null
      }

      p.address_components.forEach(c=>{
        if(c.types.indexOf('administrative_area_level_2') >= 0){ this.place.state = c.long_name; }
        else if(c.types.indexOf('postal_code') >= 0){ this.place.zipcode = c.long_name; }
        else if(c.types.indexOf('locality')){ this.place.city = c.long_name; }
      });

      this.controller.patchValue(this.place.address);
      this._changeDetector.markForCheck();
      this.selectAddress.emit(this.place);
    }
    else{ this.place = null; }
  }
}

export interface AddressData {
  address: string;
  location: {lat: number, lng: number};
  city: string;
  state: string;
  zipcode: string;    
}