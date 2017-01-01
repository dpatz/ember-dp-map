import Ember from 'ember';

export default Ember.Component.extend({
  map: null,

  didInsertElement() {
    this.nearestWithProperty('isMap').get('deferredMap').promise.then(map => {
      this.set('map', map);
      this.didLoadMap();
    });
  },

  didLoadMap() {}
});
