'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouterDom = require('react-router-dom');

var _components = require('../shared/components');

var _renderHtml = require('./renderHtml');

var _renderHtml2 = _interopRequireDefault(_renderHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reactRouteHandler(req, res) {
  var context = {};
  var reactApp = (0, _server.renderToString)(_react2.default.createElement(
    _reactRouterDom.StaticRouter,
    { location: req.url, context: context },
    _react2.default.createElement(_components.App, null)
  ));
  res.send((0, _renderHtml2.default)(reactApp));
}
exports.default = reactRouteHandler;