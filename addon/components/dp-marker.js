import Ember from 'ember';
import layout from '../templates/components/dp-marker';

export default Ember.Component.extend({
  layout: layout,

  map: null,

  _position: null,

  position: Ember.computed('_position', {
    get: function() {
      return this.get('_position');
    },
    set: function(key, value) {
      const marker = this.get('marker');
      if (marker) {
        marker.setPosition(value);
      }

      this.set('_position');
      return value;
    }
  }),

  _title: null,

  title: Ember.computed('_title', {
    get: function() {
      return this.get('_title');
    },
    set: function(key, value) {
      const marker = this.get('marker');
      if (marker) {
        marker.setTitle(value);
      }

      this.set('_title');
      return value;
    }
  }),

  didInsertElement() {
    this.nearestWithProperty('isMap').get('deferredMap').promise.then(map => {
      this.set('map', map);

      const marker = new google.maps.Marker({
        map: map,
        position: this.get('position'),
        title: this.get('title')
      });
      this.set('marker', marker);
    });
  }
});
