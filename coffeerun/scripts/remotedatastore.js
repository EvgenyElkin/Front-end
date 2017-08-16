(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error('No remote URL supplied.');
    }
    this.serverUrl = url;
  }

  RemoteDataStore.prototype.add = function(key, val) {
    $.post(this.serverUrl, val, function(response) {
      console.log(response);
    });
  };

  RemoteDataStore.prototype.getAll = function(callback) {
    $.get(this.serverUrl, function(response) {
      callback(response);
    });
  }

  RemoteDataStore.prototype.get = function(key, callback) {
    $.get(this.serverUrl + '/' + key, function(response) {
      callback(response);
    });
  };

  RemoteDataStore.prototype.remove = function(key) {
    $.ajax(this.serverUrl + '/' + key, {
      type: 'DELETE'
    });
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
