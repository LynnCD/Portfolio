'use strict';

(function(module) {
  const repos = {};
  repos.all = [];
  repos.requestRepos = callback => {
    $.get(`/github/users/LynnDC/repos`)
    .then(res => repos.all = res, err => console.error(err))
    .then(callback);
  }

  // TODO start block
  // let token = '04ebaa69df7ee3d77e79fc46b1978c25d610c5c1';
  // let username = 'LynnDC';

  // repos.requestRepos = function(callback) {
  //   // : How would you like to fetch your repos? Don't forget to call the callback.
  //   //       Remember that the callback function we'll want to call relies on repos.all
  //   //       being an array with a bunch of repo objects in it, so you'll need to
  //   //       populate it with the response from Github before you call the callback.
  //   $.ajax({
  //     url: `https://api.github.com/users/${username}/repos`,
  //     method: 'GET',
  //     header: {
  //       Authorization: `token ${token}`
  //     }
  //   })
  //    .then(
  //      function(response) {
  //        repos.all = response;
  //        callback();
  //      }
  //    )
  // };
  // TODO end block

  repos.with = attr => repos.all.filter(repo => repo[attr]);
  module.repos = repos;
})(window);
