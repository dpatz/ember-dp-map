import Ember from "ember";

const { service } = Ember.inject;

export default Ember.Route.extend({
  geocoder: service('geocoder'),

  model() {
    return Ember.Object.create({
      center: {
        lat: 32.96,
        lng: -117.15
      }
    });
  },

  actions: {
    'map-center-changed'(center) {
      this.get('controller.model').set('center', center);
    },

    'log-center'() {
      this.get('geocoder').geocode(this.get('controller.model.center')).then(address_components => {
        console.log(address_components);
      });
    }
  }
});
