'use strict';
// based on https://github.com/juliangruber/isarray/blob/v2.0.5/index.js

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};
