$(function () {
  'use strict';

  $('.twemoji').each(function (_, node) {
    twemoji.parse(node);
  });

  var mapping = {
    'm':           '(',
    'a':           '╯',
    'i':           '°',
    'l':           '□',
    't':           '°',
    'o':           '）',
    ':':           '╯',
    'skateman':    '︵',
    '@':           ' ',
    'skateman.eu': '┻━┻'
  }

  $('a:has(.fa-envelope-o)').on({
    mouseenter: function (e) {
      var link = $(this).attr('href');
      $.each(mapping, function (key, value) {
        link = link.replace(value, key);
      });
      $(this).attr('href', link);
    },
    mouseleave: function (e) {
      var link = $(this).attr('href');
      $.each(mapping, function (key, value) {
        link = link.replace(key, value);
      });
      $(this).attr('href', link);
    }
  });
});
