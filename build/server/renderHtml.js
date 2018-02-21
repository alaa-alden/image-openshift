'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderHtml;

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { version } from '../../package.json'

function renderHtml(reactApp) {
  return '<!doctype html>\n<html >\n  <head>\n    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">\n    <meta name="apple-mobile-web-app-capable" content="yes">\n    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">\n    <meta name="theme-color" content="#ffffff">\n    <link rel=\'stylesheet\' href=\'/bootstrap/dist/css/bootstrap.min.css\' />\n  </head>\n  <body >\n    <div id="app">' + reactApp + '</div>\n\n    <script src="' + _config2.default.assetPath + '/bundle.js"></script>\n    <script src="/jquery/dist/jquery.min.js"></script>\n    <script src="/bootstrap/dist/js/bootstrap.min.js"></script>\n    </body>\n  </html>';
}

/* <script>
  window.clientAppConfig = {
    state: ${JSON.stringify(state)}
  }
</script>


<script>
  if(!window.Promise || !window.Symbol) {
    document.write('<script src="${config.assetPath}/polyfills.${version}.bundle.js"><\\/script>')
  }
</script>
<script src="${config.assetPath}/vendor.${version}.bundle.js"></script>
<script src="${config.assetPath}/app.${version}.bundle.js"></script> */