import Ember from "ember";

export default Ember.Route.extend({
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
    }
  }
});
