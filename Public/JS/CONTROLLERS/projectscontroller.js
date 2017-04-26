'use strict';

(function(module) {
  const projectsController = {};

  projectsController.init = function() {
    $('.tab').hide();
    $('.projects').show();
  }

  module.projectsController = projectsController;
})(window);
