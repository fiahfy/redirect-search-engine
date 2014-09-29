'use strict';

/* Services */

var services = angular.module('services', []);

services.service('RedirectService', function() {
  this.setup = function(){
    chrome.webRequest.onBeforeRequest.addListener(
      function(details) {
        var parser = document.createElement('a');
        parser.href = details.url;

        var q = '';
        var match = parser.search.match(/[?&]p=(.*?)(&|$)/i);
        if (match) {
          q = match[1];
        }

        return {
          redirectUrl: 'https://www.google.com/#q=' + q
        };
      },
      {urls: ["*://*/search*"]},
      ["blocking"]
    );
  };
});
