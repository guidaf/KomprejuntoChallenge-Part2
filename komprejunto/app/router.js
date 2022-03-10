import EmberRouter from '@ember/routing/router';
import config from 'komprejunto/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('new-order');
  this.route('orders');
});
