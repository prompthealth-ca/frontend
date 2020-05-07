import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  blogs = [
    {
      img: "assets/img/blog3.jpg",
      title: "Dynamic Pricing and the Business of Psychotherapy",
      desc:
        "It is said that no one becomes a psychotherapist for the money. And indeed, psychotherapists as a group earn far less than many others with similar levels of professional training and experience. As a psychiatrist who worked as a psychotherapist for over thirty years, I was keenly aware of how my income was a fraction of that of most of my medical colleagues. But being commit",
      date: "March 10th, 2020"
    },
    {
      img: "assets/img/blog3.jpg",
      title: "Dynamic Pricing and the Business of Psychotherapy",
      desc:
        "It is said that no one becomes a psychotherapist for the money. And indeed, psychotherapists as a group earn far less than many others with similar levels of professional training and experience. As a psychiatrist who worked as a psychotherapist for over thirty years, I was keenly aware of how my income was a fraction of that of most of my medical colleagues. But being commit",
      date: "March 11th, 2020"
    }
  ];

  pdfs = [
    {
      title: "Release of Information",
      desc:
        "Fill out this form to allow Dr. Steingraber to communicate with someone else on your team, such as family members, previous therapists, teachers, psychiatrists or anyone else you deem appropriate.",
      pdf: "assets/pdf/pdf.pdf"
    },
    {
      title: "Release of Information",
      desc:
        "Fill out this form to allow Dr. Steingraber to communicate with someone else on your team, such as family members, previous therapists, teachers, psychiatrists or anyone else you deem appropriate.",
      pdf: "assets/pdf/pdf.pdf"
    },
    {
      title: "Release of Information",
      desc:
        "Fill out this form to allow Dr. Steingraber to communicate with someone else on your team, such as family members, previous therapists, teachers, psychiatrists or anyone else you deem appropriate.",
      pdf: "assets/pdf/pdf.pdf"
    }
  ];

  listing = [
    {
      title: 'My Profile',
      link: 'my-profile'
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
      title: 'My Booking',
      link: 'my-booking'
    },
    {
      title: 'My Payment',
      link: 'my-payment'
    }
  ];
  cListing = [
    {
      title: 'My Booking',
      link: 'my-booking'
    },
    {
      title: 'My Payment',
      link: 'my-payment'
    },
    {
      title: 'Add Professional',
      link: 'add-professionals'
    },
    {
      title: 'My Videos',
      link: 'videos-blogs'
    }
  ];
  uListing = [
    {
      title: 'My Booking',
      link: 'my-booking'
    },
    {
      title: 'My Favourite',
      link: 'my-favourites'
    },
    {
      title: 'Review and Rating',
      link: 'reviews-ratings'
    },
  ];
  constructor() { }

  ngOnInit(): void {
    this.listing.push(...this.cListing);
    
    // switch(localStorage.getItem("roles")) {
    //   case 'SP':
    //     this.listing.push(...this.spListing);
    //   break;
    //   case 'C':
    //     this.listing.push(...this.cListing);
    //   break;
    //   case 'U':
    //     this.listing.push(...this.uListing);
    //   break;
    // }
  }

}
