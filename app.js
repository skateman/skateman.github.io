document.addEventListener('DOMContentLoaded', function(event) {
  'use strict';

  document.querySelectorAll('.twemoji').forEach(twemoji.parse);

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
  };

  document.querySelector('a#e-mail').addEventListener('mouseenter', function(e) {
    var link = this.getAttribute('href');
    Object.keys(mapping).forEach(function(key) {
      link = link.replace(mapping[key], key);
    });
    this.setAttribute('href', link);
  });

  document.querySelector('a#e-mail').addEventListener('mouseleave', function(e) {
    var link = this.getAttribute('href');
    Object.keys(mapping).forEach(function(key) {
      link = link.replace(key, mapping[key]);
    });
    this.setAttribute('href', link);
  });
});
