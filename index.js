/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-dp-map',

  included: function(app) {
    app.import(app.bowerDirectory + '/google-maps/lib/Google.min.js');
  }
};
