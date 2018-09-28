const path = require('path');
const Vinyl = require('vinyl');
const browserify = require('browserify');

module.exports = function (filePath, standalone, cb, rename) {
  filePath = path.resolve('node_modules', filePath);
  browserify(filePath, {standalone: '__yom_bundle.' + standalone}).bundle(function (err, content) {
    if (err) {
      return cb(err);
    }
    const file = new Vinyl({
      base: path.resolve('node_modules'),
      cwd: process.cwd(),
      path: rename ? path.resolve(path.dirname(filePath), rename) : filePath,
      contents: content
    });
    cb(null, file);
  });
};
