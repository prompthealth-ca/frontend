export const environment = {
  production: true,
  config: {
    APP_NAME: "Wellness",
    //local
    // BASE_URL: "http://192.168.0.54:1338/",
    // API_URL: "http://192.168.0.54:1338/",
    //server
    BASE_URL: "http://18.216.244.101/",
    API_URL: "http://18.216.244.101/api/",
  },
  api_routes: {
    LOGIN: 'login',
    REGISTER: 'register',
    MY_ACCOUNT_INFO: '',
    EDIT_PROFILE: ''
  }
};
