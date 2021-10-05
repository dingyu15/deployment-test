const env  = process.env.REACT_APP_ENV;

console.log(env);

let config = {
    baseURL: 'http://localhost/',
};

switch(env.toUpperCase()) {
  case 'STAGE':
    config.baseURL = 'https://stage.dy.github.io/deployment-test/';
    break;
  case 'PRODUCTION':
    config.baseURL = 'https://dy.github.io/deployment-test/';
    // config.baseURL = 'https://www.google.com/'
    break;
  default:
    config.baseURL = null;
}

export default config;