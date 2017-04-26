'use strict';

(function(module) {
  const contactController = {};

  contactController.init = function() {
    $('.tab').hide();
    $('#contact').show();
  }

  module.contactController = contactController;
})(window);
