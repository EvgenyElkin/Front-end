(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$formElement = $(selector);
    if (!this.$formElement.length) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function(submitCallback) {
    this.$formElement.on("submit", function(event) {
      event.preventDefault();

      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
      });
      submitCallback(data);
      this.reset();
      this.elements[0].focus();
    });
  }

  FormHandler.prototype.addInputHandler = function(inputCallback) {
    this.$formElement.on('input', '[name=email]', function(event) {
      var email = event.target.value;
      var message = '';
      if (inputCallback(email)) {
        event.target.setCustomValidity('');
      } else {
        message = email + ' is not an authorized email address!'
        event.target.setCustomValidity(message);
      }
    });
  }

  App.FormHandler = FormHandler;
  window.App = App;
})(window);
