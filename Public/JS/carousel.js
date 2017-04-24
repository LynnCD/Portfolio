'use strict';
let slideIndex = 0;

function showProject(n) {
  let $projects = $('figure.project');
  $projects.hide();

  if (n >= $projects.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = $projects.length - 1;
  }

  $($projects[slideIndex]).show();
}

showProject(slideIndex);

function incProject(n) {
  showProject(slideIndex += n);
}
