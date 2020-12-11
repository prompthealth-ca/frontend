export const environment = {
  production: true,
  config: {
    APP_NAME: 'Wellness',
    // server
    // BASE_URL: "http://3.12.81.245:3000/api/v1/",
    // API_URL: "http://3.12.81.245:3000/api/v1/",

    BASE_URL: "http://198.251.65.146:4202/api/v1/",
    API_URL: "http://198.251.65.146:4202/api/v1/",

    // BASE_URL: 'https://prompthealth.ca/',
    // API_URL: 'https://prompthealth.ca:3000/api/v1/',
    stripeKey: 'pk_test_zqD7pwcCCzFTnYdL8NhZeIl600rcJJW5dU'
  },
  api_routes: {
    LOGIN: 'login',
    REGISTER: 'register',
    MY_ACCOUNT_INFO: '',
    EDIT_PROFILE: ''
  }
};
