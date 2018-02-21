'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _errorpage = require('./errorpage');

var _errorpage2 = _interopRequireDefault(_errorpage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound(_ref) {
  var errorText = _ref.errorText,
      text = _ref.text;
  return _react2.default.createElement(_errorpage2.default, { errorCode: 404, errorText: errorText, text: text });
};

NotFound.propTypes = {
  errorText: _propTypes2.default.string,
  text: _propTypes2.default.string
};

NotFound.defaultProps = {
  errorText: '404 Not found',
  text: '\n    <h1>\n      Look\'s like you\'re lost.\n    </h1>\n  '
};

exports.default = NotFound;