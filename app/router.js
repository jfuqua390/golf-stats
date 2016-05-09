import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('logout');
  this.route('register');
  this.route('login');

  this.route('home', function() {
    this.route('add');
    this.route('editbio');
  });
  this.route('history');
  this.route('editprofile');
  this.route('addcourse');
  this.route('courses');
});

export default Router;
