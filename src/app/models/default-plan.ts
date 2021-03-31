export interface IDefaultPlan {
  _id: string;
  name: string;
  price: number;
  yearlyPrice: number;
  userType: string[];
  status: boolean;
  isDeleted: boolean;
  isMonthly: boolean;
  affiliatePlan: boolean;

  ListAmenities: boolean;
  ListOfProviders: boolean;
  ListProductsOption: boolean;
  ListYourTypeOfCenterAndDifferentLocations: boolean;
  addressURLLogoPicture: boolean;
  performanceDashboard: boolean;
  professionalProfile: boolean;
  receiveMessagesForBooking: boolean;
  reviewsAndFeedback: boolean;
  videoUpload: boolean;
  sideBySideComparisons: boolean;
  socialMediaLink: boolean;
  verifiedBadge: boolean;
  featuredOnHomePage: boolean;

  isDefault: true
  stripePriceId: string;
  stripeProductId: string;
  stripeYearlyPriceId: string;
  striperesponse: any;
}
