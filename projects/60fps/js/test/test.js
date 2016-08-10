/*
 *  TESTS
 */
var assert = require('assert');

 function saturate(iMax, lvl, gain, delay) {
      var i = iMax;

      return (function iter() {

        // change values to increase saturation
        i = i - 1;
        lvl = lvl + gain;
        var color = `hsla(35, ${lvl}%, 50%, 1)`;
        // console.log(color);
        // colorizeGroup(wire.arr, color);

        // repeat 
        if ( i > 0 && i <= iMax ) { 
          window.setTimeout( () => {
            iter();
          }, delay);
        } 

        return color;
      }());
    }


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('wire animation', function() {
  describe('saturate()', function() {
    it('should change hsl color code', function() {
      assert.equal("string", typeof saturate(10, 10, 8, 50));
    });
  });
});


