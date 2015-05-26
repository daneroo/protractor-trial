var wd = require('wd'),
    chai = require('chai'),
    expect = chai.expect,
    _ = require('underscore'),
    fs = require('fs'),
    path = require('path'),
    uuid = require('uuid-js');

var VARS = {};

// This assumes that selenium is running at http://127.0.0.1:4444/wd/hub/
var noop = function() {},
    b = wd.remote();

describe('Selenium Test Case', function() {

  this.timeout(60000);

  it('should execute test case without errors', function(done) {

    b.chain(function(err) {
      done(err);
    })
    .init({
      browserName: 'firefox'
    })
    .get("http://seleniumbuilder.github.io/se-builder/")
    .elementByCssSelector("#content > p", function(err, el) {
      b.next('clickElement', el, noop);
    })
    .elementByCssSelector("h2.important", function(err, el) {
      b.next('moveTo', el, 0, 0, function() {
        b.next('doubleclick', noop);
      });
    })
    .elementByCssSelector("h2.important", function(err, el) {
      b.next('clickElement', el, noop);
    })
    .elementByCssSelector("h2.important", function(err, el) {
      b.next('clickElement', el, noop);
    })
    .elementByCssSelector("div.jumbotron.masthead", function(err, el) {
      b.next('clickElement', el, noop);
    })
    .elementByCssSelector("div.jumbotron.masthead", function(err, el) {
      b.next('clickElement', el, noop);
    })
    .elementByCssSelector("#a_2 > ul > li", function(err, el) {
      b.next('clickElement', el, noop);
    })
    .close(function(err) {
      done(err);
    });

  });
});

afterEach(function() {
  b.quit();
});
