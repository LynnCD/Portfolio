// make a chart

(function(module) {
  const repoView = {};

  let render = Handlebars.compile($('#repo-template').html());
  repoView.index = function() {
    $('#repos').append(
      repos.with('id').map(render)
    );
  };

  module.repoView = repoView;
})(window);
