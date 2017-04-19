var Project = [];

function Project (project_data) {
  this.name = project_data.name;
  this.language = project_data.language;
  this.tool = project_data.tool;
  this.url = project_data.url;
}

Project.all =[];

// Project.prototype.toHtml = function() {
//   let template = Handlebars.compile($('#article-template').text());
//
//   this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
//   this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
//   this.body = marked(this.body);
//
//   return template(this);
// };

Project.loadAll = function(project_data) {
  project_data.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  project_data.forEach(function(ele) {
    Project.all.push(new Project(ele));
  })
}

Project.fetchAll = function() {
  if (localStorage.project_data) {
    Project.loadAll(JSON.parse(localStorage.project_data));
    // DataView.initIndexPage();
    } else {
      $.getJSON('JS/project-data.json').then(function(project_data){
    Project.loadAll(project_data);
    // DataView.initIndexPage();
    localStorage.project_data = JSON.stringify(project_data);
  })
}}
