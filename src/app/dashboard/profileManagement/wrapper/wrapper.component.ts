import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  listing = [
    {
      title: 'My Profile',
      link: 'my-profile'
    },
    {
      title: 'My Booking',
      link: 'my-booking'
    }
  ];
  spListing = [
    {
      title: 'My Subscription',
      link: 'my-subscription'
    },
    {
      title: 'Professional Background',
      link: 'my-professional-info'
    },
    {
      title: 'My Payment',
      link: 'my-payment'
    },
    {
      title: 'My Videos',
      link: 'videos-blogs'
    },
    {
      title: 'Review and Rating',
      link: 'reviews-ratings'
    },
  ];
  cListing = [
    {
      title: 'My Payment',
      link: 'my-payment'
    },
    {
      title: 'My Amenities',
      link: 'my-amenities'
    },
    {
      title: 'My Products',
      link: 'my-product'
    },
    {
      title: 'My Doctors',
      link: 'add-professionals'
    },
    {
      title: 'My Videos',
      link: 'videos-blogs'
    },
    {
      title: 'Review and Rating',
      link: 'reviews-ratings'
    },
  ];
  uListing = [
    {
      title: 'My Favourite',
      link: 'my-favourites'
    }
  ];
  constructor() { }

  ngOnInit(): void {
    switch(localStorage.getItem("roles")) {
      case 'SP':
        this.listing.push(...this.spListing);
      break;
      case 'C':
        this.listing.push(...this.cListing);
      break;
      case 'U':
        this.listing.push(...this.uListing);
      break;
    }
  }

}
