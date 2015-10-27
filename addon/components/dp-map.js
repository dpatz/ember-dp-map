import Ember from 'ember';
import layout from '../templates/components/dp-map';

export default Ember.Component.extend({
  layout: layout,

  classNames: ['dp-map'],

  isMap: true,

  deferredMap: Ember.RSVP.defer(),

  lat: 32.96,

  lon: -117.15,

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
    }
  }),

  zoom: 11,

  didInsertElement() {
    const map = new google.maps.Map(this.$()[0], {
      center: this.get('center'),
      zoom: this.get('zoom')
    });
    this.set('map', map);
    this.get('deferredMap').resolve(map);

    google.maps.event.addListener(map, 'center_changed', () => {
      Ember.run.later(() => {
        this.setProperties({
          lat: map.center.lat(),
          lon: map.center.lng()
        });
        this.sendAction('on-center-change', this.get('center'));
      });
    });
  }
});
