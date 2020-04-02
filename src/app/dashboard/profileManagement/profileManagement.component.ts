import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profileManagement",
  templateUrl: "./profileManagement.component.html",
  styleUrls: ["./profileManagement.component.scss"]
})
export class ProfileManagementComponent implements OnInit {
  constructor() {}
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

  ngOnInit(): void {}
}
