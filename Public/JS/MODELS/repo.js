'use strict';

(function(module) {
  const repos = {};
  repos.all = [];
  repos.requestRepos = callback => {
    $.ajax({
      url: `https://api.github.com/users/LynnCD/repos`,
      method: 'GET',
      header: {Authorization: `token f8ad67f5d071cf2c4fea7c9e4154b3111ad98445`}
    })
     .then(response => {repos.all = response; callback();})
  }
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
