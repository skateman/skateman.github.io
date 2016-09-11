$(function () {
  'use strict';

  $('.twemoji').each(function (_, node) {
    twemoji.parse(node);
  });
});
