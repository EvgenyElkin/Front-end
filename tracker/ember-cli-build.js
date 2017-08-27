/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var bootstrapPath = 'bower_components/bootstrap-sass/assets/';

  let app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      includePaths: [
        bootstrapPath + 'stylesheets'
      ]
    }
  });

  app.import(bootstrapPath + 'javascripts/bootstrap.js');
  return app.toTree();
};
