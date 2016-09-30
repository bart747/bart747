

var assert = require('assert');
var editor = require('../editor.js');

describe('Array (test test)', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('editorToggle', function() {
  describe('change editorState', function() {
    it('should chang editor state obj values: true -> false etc', function() {
      var state1 = editor.editorState;
      editor.editorToggle;
      assert.equal(editor.editorState.readerOn, state1.readerOn);
    });
  });
});