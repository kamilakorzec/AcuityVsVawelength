'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /form when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/form");
  });


  describe('form', function() {

    beforeEach(function() {
      browser.get('index.html#!/form');
    });


    it('should render form when user navigates to /form', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('letters', function() {

    beforeEach(function() {
      browser.get('index.html#!/letters');
    });


    it('should render letters when user navigates to /letters', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
