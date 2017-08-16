(function(window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';

  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList;
  var Validation = App.Validation;

  var truck = new Truck("NCC-1701", new DataStore());
  var formHandler = new FormHandler(FORM_SELECTOR);
  var checklist = new CheckList(CHECKLIST_SELECTOR);

  formHandler.addSubmitHandler(function (data) {
    truck.createOrder.call(truck, data);
    checklist.addRow.call(checklist, data);
  });
  checklist.addClickHandler(truck.deliverOrder.bind(truck));
  formHandler.addInputHandler(Validation.isCompanyEmail);
  window.truck = truck;
})(window);
