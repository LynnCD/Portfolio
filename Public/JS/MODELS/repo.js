'use strict';

(function(module) {
  const repos = {};
  repos.all = [];
  repos.requestRepos = callback => {
    $.get(`/github/user/repos`)
    .then(res => repos.all = res, err => console.error(err))
    .then(callback);
  }
  repos.with = attr => repos.all.filter(repo => repo[attr]);
  module.repos = repos;
})(window);
