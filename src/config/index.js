const env  = process.env.REACT_APP_ENV;

console.log(env);

let config = {
    baseURL: 'http://localhost/',
};

switch(env.toUpperCase()) {
  case 'STAGE':
    config.baseURL = 'https://stage.dingyu15.github.io/deployment-test/';
    break;
  case 'PRODUCTION':
    config.baseURL = 'https://dingyu15.github.io/deployment-test/';
    break;
  default:
    config.baseURL = null;
}

export default config;