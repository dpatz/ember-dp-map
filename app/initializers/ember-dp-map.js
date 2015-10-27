import config from 'ember-dp-map/config';
import ENV from '../config/environment';

export function initialize(/* container, application */) {
  config.googleMapsAPIKey = ENV['ember-dp-map'].googleMapsAPIKey;
}

export default {
  name: 'ember-dp-map',
  before: 'google-maps',
  initialize: initialize
};
