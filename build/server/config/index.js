'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appRoot = process.cwd();
var environmentVariablePrepend = 'SiteConfig_';

function LoadConfig(configPath) {
  var logErorr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  try {
    return require.main.require(_path2.default.join(appRoot, configPath));
  } catch (e) {
    if (logErorr) {
      console.log('Config error');
      console.log(e);
    }
  }
}
function GetConfig() {
  var defaultConfig = LoadConfig('./config/config.default.json');

  var envConfig = {};
  Object.keys(defaultConfig).forEach(function (key) {
    var value = process.env['' + environmentVariablePrepend + key];
    if (value !== undefined) {
      var originalValue = defaultConfig[key];

      console.log(key + ' was found as an env variable (' + value + ')');
      if (typeof originalValue === 'boolean') {
        envConfig[key] = value.toLowerCase() === 'true';
      } else if (typeof originalValue === 'number') {
        envConfig[key] = Number(value);
      } else {
        // It is a string
        envConfig[key] = value;
      }
    }
  });
  console.log('Initialising config');
  console.log('defaultConfig:');
  console.log(defaultConfig);
  console.log('envConfig:');
  console.log(envConfig);
  var mergedConfig = Object.assign(defaultConfig, envConfig);
  console.log('mergedConfig:');
  console.log(mergedConfig);

  return mergedConfig;
}

// call the config straight away at runtime
exports.default = GetConfig();

/*
  note :
  process.cwd(): returns the current working directory,
  i.e. the directory from which you invoked the node command.

  __dirname: returns the directory name of the directory containing the JavaScript source code file

  note 2:
  The path.join() method joins all given path segments together
  note 3:
  https://stackoverflow.com/questions/45136831/node-js-require-main-module
*/