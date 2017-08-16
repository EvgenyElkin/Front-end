(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function CheckList(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  CheckList.prototype.addRow = function(order) {
    this.removeRow(order.email);
    var row = new Row(order);

    this.$element.append(row.$element);
  }

  CheckList.prototype.removeRow = function(email) {
    this.$element
      .find('[value="' + email + '"]')
      .closest('[data-coffee-order="checkbox"]')
      .remove();
  }

  CheckList.prototype.addClickHandler = function(clickCallback) {
    this.$element.on('click', 'input', function(event) {
      var email = event.target.value;
      this.removeRow(email);
      clickCallback(email);
    }.bind(this));
  }

  function Row(order) {
    var $div = $('<div></div>', {
      'data-coffee-order': 'checkbox',
      'class': 'checkbox'
    });

    var $label = $('<label></label>');

    var $checkbox = $('<input></input>', {
      type: 'checkbox',
      value: order.email
    });

    var description = order.size + ' ';
    if (order.favior) {
      description += order.favior + ' ';
    }
    description += order.coffee + ', ';
    description += ' (' + order.email + ')';
    description += ' [' + order.strength + 'x]';

    $label.append($checkbox);
    $label.append(description);
    $div.append($label);
    this.$element = $div;
  }

  App.CheckList = CheckList;
  window.App = App;
})(window);
