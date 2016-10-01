"use strict";

var assert = require('assert');
var e = require('../editorLogic.js');

describe('Array (test test)', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('test function', function() {
  describe('a + b', function() {
    it('should return x (x=a+b)', function() {
     
      assert.equal(e.testFn(2, 1), 3);
    });
  });
});

describe('toggleBool', function() {
  describe('change element val: true <-> false', function() {
    it('should chang obj values: true <-> false', function() {
      var el = {
        display: true
      } 
      var el2 = {
        display: false
      } 
      el.display = e.toggleBool(el.display);
      el2.display = e.toggleBool(el2.display);
      assert.equal(el.display, false);
      assert.equal(el2.display, true);
    });
  });
});


describe('getUpdatedContent', function() {
  describe('update content', function() {
    it('should return updated content of given element', function() {
      let txt = "abc";
      let txt2 = "xyz";
      txt = e.getUpdatedContent(txt, txt2)
      assert.equal(txt, txt2);
    });
  });
});
