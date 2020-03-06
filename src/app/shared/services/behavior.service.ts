import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { environment } from '../../../environments/environment';
@Injectable()
export class BehaviorService {
    public city:BehaviorSubject<object> = new BehaviorSubject<object>({});
    public latLng:BehaviorSubject<object> = new BehaviorSubject<object>({});
    public cart:BehaviorSubject<object> = new BehaviorSubject<object>({});
    public user:BehaviorSubject<object> = new BehaviorSubject<object>({});

    rootUrl: string =   environment.config.BASE_URL;


    constructor() {}


    setCity( value ) {
        let city: object;
        let cityObject = { city: value };
        this.city.next( cityObject );
        return {};     
    }

    setLatLng( obj ) {
        let latLng: object;
        localStorage.setItem("latLng", JSON.stringify(obj));
        let latLngObject = { lat: obj.lat, lng: obj.lng };
        this.latLng.next( latLngObject );
        return {};     
    }

    setCart( value ) {
        let cart: object;
        let cartObject = { cart: value };
        this.cart.next( cartObject );
        return {};     
    }

    setUser( value ) {
        let user: object;
        let userObject = { user: value };
        this.user.next( userObject );
        return {};     
    }

    unsetCart( ) {
        this.cart.next({});
        return {};     
    }

    unsetUser( ) {
        this.user.next({});
        return {};     
    }

}
