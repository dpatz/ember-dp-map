import Ember from 'ember';

export default Ember.Service.extend({
  geocoder: null,

  init() {
    this.set('geocoder', new google.maps.Geocoder);
    return this._super(...arguments);
  },

  geocode(latLng) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      this.get('geocoder').geocode({'location': latLng}, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK && results[0]) {
            const address_components = {};

            results[0].address_components.forEach((address_component) => {
              address_components[address_component.types[0]] = address_component.long_name;
            });

            resolve(address_components);
          } else {
            reject('Unable to find address.');
          }
      });
    });
  }
});
