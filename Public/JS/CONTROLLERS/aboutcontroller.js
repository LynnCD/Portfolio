'use strict';

(function(module) {
  const aboutController = {};

  aboutController.init = function() {
    $('.tab').hide();
    $('.about').show();
  }

  module.aboutController = aboutController;
})(window);
