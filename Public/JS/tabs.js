'use strict';

showTab(0);

function showTab(index) {
  let $tabs = $('.tab');
  $tabs.hide();
  $($tabs[index]).show();
}
