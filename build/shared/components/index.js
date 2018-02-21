'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = exports.About = exports.NotFound = exports.Home = exports.Footer = exports.Router = exports.App = undefined;

var _app = require('./App/app.js');

var _app2 = _interopRequireDefault(_app);

var _router = require('./Router/router.js');

var _router2 = _interopRequireDefault(_router);

var _footer = require('./Footer/footer.js');

var _footer2 = _interopRequireDefault(_footer);

var _home = require('./Home/home.js');

var _home2 = _interopRequireDefault(_home);

var _notfound = require('./errors/notfound.js');

var _notfound2 = _interopRequireDefault(_notfound);

var _about = require('./About/about.js');

var _about2 = _interopRequireDefault(_about);

var _image = require('./Image/image.js');

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export Navigation from './Navigation/navigation.js'
exports.App = _app2.default;
exports.Router = _router2.default;
exports.Footer = _footer2.default;
exports.Home = _home2.default;
exports.NotFound = _notfound2.default;
exports.About = _about2.default;
exports.Image = _image2.default;