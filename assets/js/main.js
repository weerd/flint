var $      = require('jquery');
var Panels = require('./panels');


var $body    = $('body');
var $page    = $('#page');
var $main    = $('main');
var $mainNav = $('#main-nav');

// console.log($body);
// console.log($page);
// console.log($main);
// console.log($mainNav);


Panels.init($page, $mainNav);
