export const environment = {
  production: true,
  config: {
    APP_NAME: 'Wellness',
    // Old Staging server
    // BASE_URL: "http://198.251.65.146:4202/api/v1/",
    // API_URL: "http://198.251.65.146:4202/api/v1/",
    // stripeKey: 'pk_test_51HMSVQHzvKsIv7FcySpZJiaqJEpFyeV4T1fqzmTaIMKAt8VoIcSFNOoy0xChuIec3fotWjF00FAMMNI5MZRvr10X00NqhMqjLR'

    //Local host
    // BASE_URL: "https://localhost:3000",
    // API_URL: "https://localhost:3000/api/v1/",
    // stripeKey: 'pk_test_51HMSVQHzvKsIv7FcySpZJiaqJEpFyeV4T1fqzmTaIMKAt8VoIcSFNOoy0xChuIec3fotWjF00FAMMNI5MZRvr10X00NqhMqjLR'
    

    // //Staging
    BASE_URL: "https://prompthealth.ca:3000",
    API_URL: "https://prompthealth.ca:3000/api/v1/",
    stripeKey: 'pk_test_51HMSVQHzvKsIv7FcySpZJiaqJEpFyeV4T1fqzmTaIMKAt8VoIcSFNOoy0xChuIec3fotWjF00FAMMNI5MZRvr10X00NqhMqjLR'
    
    // BASE_URL: 'https://prompthealth.ca/',
    // API_URL: 'https://api.prompthealth.ca/api/v1/',
    // stripeKey: 'pk_live_51HMSVQHzvKsIv7FclCIgEYNrD4tlvjzZRTDx43Y54pVY3vjQ8MhFuOntQMY094MZ49bDzOdFf2A2tkYdTwSag9ij00xDUu4xnU'

  },
  api_routes: {
    LOGIN: 'login',
    REGISTER: 'register',
    MY_ACCOUNT_INFO: '',
    EDIT_PROFILE: ''
  }
};
