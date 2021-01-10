import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'https://simplepractice-test-app.herokuapp.com';
  namespace = 'api/v1';

  buildURL(...args) {
    return `${super.buildURL(...args)}.json`;
  }
}
