'use strict';

/* jasmine specs for services go here */

describe('services', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });

    var dummyStorage = {};
    window.chrome = {
      webRequest: {
        onBeforeRequest: {
          addListener: function(){}
        }
      }
    };
    spyOn(chrome.webRequest.onBeforeRequest, 'addListener').andCallFake(function(callback){
      //
    });
  });

  beforeEach(module('app'));

  describe('RedirectService', function(){
    var service;

    beforeEach(inject(function(RedirectService) {
      service = RedirectService;
    }));

    it('Setup', function() {
      service.setup();
    });
  });
});
