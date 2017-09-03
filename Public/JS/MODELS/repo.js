'use strict';

(function(module) {
  const repos = {};
  repos.all = [];
  repos.requestRepos = callback => {
    $.ajax({
      url: `https://api.github.com/users/LynnCD/repos`,
      method: 'GET',
      header: {'Authorization': `token ${githubToken}`}
    })
      .then(response => repos.all = response, err => console.error(err))
      .then(callback);
  };
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
