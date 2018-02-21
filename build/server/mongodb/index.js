'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SAVE = undefined;

var _mongodb = require('mongodb');

var url = 'mongodb://test:test@ds141068.mlab.com:41068/hope_mongodb';
var SAVE = function SAVE(name) {
  _mongodb.MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('hope_mongodb');
    var myobj = { name: '' + name };
    dbo.collection('Image').insertOne(myobj, function (err, res) {
      if (err) throw err;
      console.log('1 document inserted');
      db.close();
    });
  });
};
//     dbo.createCollection("customers", (err, res) => {}


exports.SAVE = SAVE;