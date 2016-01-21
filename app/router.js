import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('addrecipe');
  this.route('listrecipe');
  this.route('listingredient');
  this.route('addnewingredient', {path: './addnewingredient/:recipeid'});
  this.route('listrecipeingredient', {path: './listrecipeingredient/:recipeid'});
  
});

export default Router;
