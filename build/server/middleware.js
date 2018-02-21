'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initMiddleware(app) {
  app.use('/public', _express2.default.static(_path2.default.join(process.cwd(), 'public/uploads')));
  app.use('/client', _express2.default.static(_path2.default.join(__dirname, '/build/client')));
  app.use(_express2.default.static(_path2.default.join(process.cwd(), 'bower_components')));
}

exports.default = initMiddleware;