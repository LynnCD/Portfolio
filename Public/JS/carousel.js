'use strict';

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var $projects = $("figure.project");
  if (n > $projects.length) {slideIndex = 1}
  if (n < 1) {slideIndex = $projects.length}
  for (i = 0; i < $projects.length; i++) {
    $projects[i].style.display = "none";
  }
  $projects[slideIndex-1].style.display = "inline-block";
}
