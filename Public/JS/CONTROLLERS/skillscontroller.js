'use strict';

(function(module) {
  const skillsController = {};

  skillsController.init = function() {
    $('.tab').hide();
    $('#skills').show();
  }

  module.skillsController = skillsController;
})(window);
