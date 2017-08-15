(function(window) {
  'use strict';

  var App = window.App || {};

  function Truck(id, db) {
    this.id = id;
    this.db = db;
  }

  Truck.prototype.createOrder = function(order) {
    this.db.add(order.email, order);
  }

  Truck.prototype.deliverOrder = function(email) {
    this.db.remove(email);
  }

  Truck.prototype.printOrders = function() {
    var emails = Object.keys(this.db.getAll());

    emails.forEach(function(email) {
      console.log(this.db.get(email));
    }.bind(this));
  }

  App.Truck = Truck;
  window.App = App;
})(window);
