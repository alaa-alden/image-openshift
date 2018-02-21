'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mongodb = require('./mongodb/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Set The Storage Engine
var storage = _multer2.default.diskStorage({
  destination: _path2.default.resolve(process.cwd(), 'public') + '/uploads/',
  filename: function filename(req, file, cb) {
    cb(null, file.originalname);
  }
});
// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  var filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  var extname = filetypes.test(_path2.default.extname(file.originalname).toLowerCase());
  // Check mime
  var mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    cb(null, true);
  } else {
    cb(new Error('I don\'t have a clue!'));
  }
}
// Init Upload
var upload = (0, _multer2.default)({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function fileFilter(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('myImage');

function Image(req, res) {
  upload(req, res, function (err) {
    if (err) {
      console.log(res.file);
      res.redirect('/err_for_upload_40');
    } else if (req.file === undefined) {
      res.redirect('/err_for_upload_60');
    } else {
      // todo mongodb
      console.log(req.file.originalname);
      (0, _mongodb.SAVE)(req.file.originalname);
      //
      res.redirect('/');
    }
  });
}

exports.default = Image;