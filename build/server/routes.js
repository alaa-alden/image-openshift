'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initRoutes = undefined;

var _reactRouteHandler = require('./reactRouteHandler');

var _reactRouteHandler2 = _interopRequireDefault(_reactRouteHandler);

var _upload_image = require('./upload_image');

var _upload_image2 = _interopRequireDefault(_upload_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appRouteHandler = function appRouteHandler(req, res) {
  (0, _reactRouteHandler2.default)(req, res);
};
var appImage = function appImage(req, res) {
  (0, _upload_image2.default)(req, res);
};

function initRoutes(app) {
  app.get('*', appRouteHandler);
  app.post('/upload', appImage);
}

exports.initRoutes = initRoutes;