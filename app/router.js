import EmberRouter from '@ember/routing/router';
import config from 'simple-practice-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('services');
  this.route('offices', { path: 'services/:service_id/offices'});
});
