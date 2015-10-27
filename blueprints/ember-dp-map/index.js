module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function(options) {
    return this.addBowerPackagesToProject([
      {name: 'google-maps', target: 'latest'}
    ]);
  }
};
