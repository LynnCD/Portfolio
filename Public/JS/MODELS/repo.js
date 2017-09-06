'use strict';

(function(module) {
  const repos = {};
  repos.all = [];
  repos.requestRepos = callback => {
    $.get('/repos')
      .then(response => repos.all = response, err => console.error(err))
      .then(callback);
  };
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
