
var exports = module.exports = {};

function testFn(a,b) {
  "use strict";
  const x = a + b;
  return x;
}

function toggleBool(el) {
  if (el === false) {
    el = !false;
  } else {
    el = !true; 
  } 
  return el;
}

function getUpdatedContent(sourceOld, sourceNew) {
  if (sourceOld != sourceNew) {
    return sourceNew;
  } else {
    return sourceOld;
  }
}

exports.testFn = testFn;
exports.toggleBool = toggleBool;
exports.getUpdatedContent = getUpdatedContent;
