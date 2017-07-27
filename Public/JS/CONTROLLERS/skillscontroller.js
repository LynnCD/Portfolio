'use strict';

(function(module) {
  const skillsController = {};

  skillsController.init = function() {
    $('.tab').hide();
    $('.skills').show();

    repos.requestRepos(repoView.index);
  }

  module.skillsController = skillsController;
})(window);
