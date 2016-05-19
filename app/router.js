import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('logout');
  this.route('register');
  this.route('login');

  this.route('home');
  this.route('history');
  this.route('editprofile');
  this.route('addcourse');
  this.route('courses');
  this.route('add-score');
  this.route('user-profile', { path: `/:id`} );
  this.route('guest', { path: `/`});
});

export default Router;
