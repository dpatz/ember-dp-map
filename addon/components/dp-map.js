import Ember from 'ember';
import layout from '../templates/components/dp-map';

export default Ember.Component.extend({
  layout: layout,

  classNames: ['dp-map'],

  isMap: true,

  deferredMap: null,

  lat: 32.96,

  lon: -117.15,

  zoom: 11,

  center: Ember.computed('lat', 'lon', {
    get() {
      return {
        lat: this.get('lat'),
        lng: this.get('lon')
      };
    },
    set(key, value) {
      this.set('lat', Ember.get(value, 'lat'));
      this.set('lon', Ember.get(value, 'lng'));
      return value;
    }
  }),

  willInsertElement() {
    this.set('deferredMap', Ember.RSVP.defer());
  },

  didInsertElement() {
    const map = new google.maps.Map(this.$()[0], {
      center: this.get('center'),
      zoom: this.get('zoom')
    });
    this.set('map', map);

    this.setupMapListeners();
  },

  setupMapListeners() {
    const map = this.get('map');

    google.maps.event.addListenerOnce(map, 'idle', () => {
      this.get('deferredMap').resolve(map);
    });

    google.maps.event.addListener(map, 'center_changed', () => {
      Ember.run.later(() => {
        this.setProperties({
          lat: map.center.lat(),
          lon: map.center.lng()
        });
        this.sendAction('on-center-change', this.get('center'));
      });
    });
  },

  willDestroy() {
    this._super();

    const map = this.get('map', map);
    google.maps.event.clearInstanceListeners(map);
  }
});
