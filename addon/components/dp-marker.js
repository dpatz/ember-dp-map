import Ember from 'ember';
import layout from '../templates/components/dp-marker';
import BaseMapElement from './_dp-base-map-element';

export default BaseMapElement.extend({
  layout: layout,

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

  didLoadMap() {
    const marker = new google.maps.Marker({
      map: this.get('map'),
      position: this.get('position'),
      title: this.get('title')
    });
    this.set('marker', marker);
  }});
