"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = function Image() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "form",
      { action: "/upload", method: "POST", encType: "multipart/form-data" },
      _react2.default.createElement("input", { name: "myImage", type: "file" }),
      _react2.default.createElement(
        "button",
        { type: "submit" },
        "Submit"
      )
    ),
    _react2.default.createElement("img", { src: "/public/download.jpg", alt: "Smiley face", height: "42", width: "42" })
  );
};
exports.default = Image;