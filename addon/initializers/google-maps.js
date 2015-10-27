import config from 'ember-dp-map/config';

export function initialize(application) {
  application.deferReadiness();
  GoogleMapsLoader.KEY = config.googleMapsAPIKey;
  GoogleMapsLoader.load(() => {
    application.advanceReadiness();
});
}

export default {
  name: 'google-maps',
  initialize: initialize
};
