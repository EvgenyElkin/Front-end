(function(window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';

  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var truck = new Truck("NCC-1701", new DataStore());
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(truck.createOrder.bind(truck));

  window.truck = truck;
})(window);
