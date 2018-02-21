'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

require('css-modules-require-hook/preset');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _routes = require('./routes');

var _middleware = require('./middleware');

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

function initApp() {
  // middleware
  (0, _middleware2.default)(app);
  // routes
  (0, _routes.initRoutes)(app);
} // end initApp
try {
  initApp();
  console.log('Listening on port ' + _config2.default.internalPort);
  app.listen(_config2.default.internalPort);
} catch (e) {
  // TODO:
  console.log(e);
}

exports.default = app;