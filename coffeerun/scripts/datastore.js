(function(window) {
  'use strict';
  // Здесь будет находиться код

  var App = window.App || {};

  function DataStore() {
    console.log('running the DataStore function');
  }

  App.DataStore = DataStore;
  window.App = App;
})();
