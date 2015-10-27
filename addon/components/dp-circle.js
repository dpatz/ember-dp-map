import Ember from 'ember';
import layout from '../templates/components/dp-circle';

export default Ember.Component.extend({
  layout: layout,

  map: null,

  circle: null,

  _center: null,

  center: Ember.computed('_center', {
    get: function() {
      return this.get('_center');
    },
    set: function(key, value) {
      const circle = this.get('circle');
      if (circle) {
        circle.setCenter(value);
      }

      this.set('_center');
      return value;
    }
  }),

  _radius: 500,

  radius: Ember.computed('_radius', {
    get: function() {
      return this.get('_radius');
    },
    set: function(key, value) {
      const circle = this.get('circle');
      if (circle) {
        circle.setRadius(value);
      }

      this.set('_radius');
      return value;
    }
  }),

  setOption(option) {
    const circle = this.get('circle');
    if (circle) {
      circle.setOptions(option);
    }
  },

  _strokeColor: '#FF0000',

  strokeColor: Ember.computed('_strokeColor', {
    get: function() {
      return this.get('_strokeColor');
    },
    set: function(key, value) {
      this.setOption({'strokeColor': value});
      this.set('_strokeColor');
      return value;
    }
  }),

  _strokeOpacity: '#FF0000',

  strokeOpacity: Ember.computed('_strokeOpacity', {
    get: function() {
      return this.get('_strokeOpacity');
    },
    set: function(key, value) {
      this.setOption({'strokeOpacity': value});
      this.set('_strokeOpacity');
      return value;
    }
  }),

  _strokeWeight: 2,

  strokeWeight: Ember.computed('_strokeWeight', {
    get: function() {
      return this.get('_strokeWeight');
    },
    set: function(key, value) {
      this.setOption({'strokeWeight': value});
      this.set('_strokeWeight');
      return value;
    }
  }),

  _fillColor: '#FF0000',

  fillColor: Ember.computed('_fillColor', {
    get: function() {
      return this.get('_fillColor');
    },
    set: function(key, value) {
      this.setOption({'fillColor': value});
      this.set('_fillColor');
      return value;
    }
  }),

  _fillOpacity: 0.35,

  fillOpacity: Ember.computed('_fillOpacity', {
    get: function() {
      return this.get('_fillOpacity');
    },
    set: function(key, value) {
      this.setOption({'fillOpacity': value});
      this.set('_fillOpacity');
      return value;
    }
  }),

  didInsertElement() {
    this.nearestWithProperty('isMap').get('deferredMap').promise.then(map => {
      this.set('map', map);

      const circle = new google.maps.Circle({
        map: this.get('map'),
        center: this.get('center'),
        radius: this.get('radius'),
        strokeColor: this.get('strokeColor'),
        strokeOpacity: this.get('strokeOpacity'),
        strokeWeight: this.get('strokeWeight'),
        fillColor: this.get('fillColor'),
        fillOpacity: this.get('fillOpacity')
      });
      this.set('circle', circle);
    });
  }
});
