'use strict';

describe('myApp.letters module', function() {

  beforeEach(module('myApp.letters'));

  describe('letters controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('View2Ctrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});