import Ember from 'ember';
import layout from '../templates/components/dp-circle';

export default Ember.Component.extend({
  layout: layout,

  map: null,

  circle: null,

  _center: null,

  _radius: 500,

  _strokeColor: '#000000',

  _strokeOpacity: 0.8,

  _strokeWeight: 2,

  _fillColor: '#000000',

  _fillOpacity: 0.2,

  center: Ember.computed('_center', {
    get() {
      return this.get('_center');
    },
    set(key, value) {
      const circle = this.get('circle');
      if (circle) {
        circle.setCenter(value);
      }

      this.set('_center');
      return value;
    }
  }),

  radius: Ember.computed('_radius', {
    get() {
      return this.get('_radius');
    },
    set(key, value) {
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

  strokeColor: Ember.computed('_strokeColor', {
    get() {
      return this.get('_strokeColor');
    },
    set(key, value) {
      this.setOption({'strokeColor': value});
      this.set('_strokeColor');
      return value;
    }
  }),

  strokeOpacity: Ember.computed('_strokeOpacity', {
    get() {
      return this.get('_strokeOpacity');
    },
    set(key, value) {
      this.setOption({'strokeOpacity': value});
      this.set('_strokeOpacity');
      return value;
    }
  }),

  strokeWeight: Ember.computed('_strokeWeight', {
    get() {
      return this.get('_strokeWeight');
    },
    set(key, value) {
      this.setOption({'strokeWeight': value});
      this.set('_strokeWeight');
      return value;
    }
  }),

  fillColor: Ember.computed('_fillColor', {
    get() {
      return this.get('_fillColor');
    },
    set(key, value) {
      this.setOption({'fillColor': value});
      this.set('_fillColor');
      return value;
    }
  }),

  fillOpacity: Ember.computed('_fillOpacity', {
    get() {
      return this.get('_fillOpacity');
    },
    set(key, value) {
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
