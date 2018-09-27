const path = require('path');
const Vinyl = require('vinyl');
const browserify = require('browserify');

module.exports = {
  '@angular/animations': {
    '@angular/animations': 'bundles/animations.umd',
    '@angular/animations/browser': 'bundles/animations-browser.umd'
  },
  '@angular/common': {
    '@angular/common': 'bundles/common.umd',
    '@angular/common/http': 'bundles/common-http.umd'
  },
  '@angular/platform-browser': {
    '@angular/platform-browser': 'bundles/platform-browser.umd',
    '@angular/platform-browser/animations': 'bundles/platform-browser-animations.umd'
  },
  '@angular/router': {
    '@angular/router': 'bundles/router.umd',
    '@angular/router/upgrade': 'bundles/router-upgrade.umd'
  },
  'babel-polyfill': 'dist/polyfill',
  'bootstrap': 'dist/js/bootstrap',
  'core-js': 'client/core',
  'jsbarcode': 'dist/JsBarcode.all',
  'mobx': 'lib/mobx.umd',
  'mobx-state-tree': 'dist/mobx-state-tree.umd',
  'pdfmake': 'build/pdfmake',
  'prop-types': function (cb) {
    if (process.env.NODE_ENV === 'production') {
      cb(null, 'prop-types.min');
    } else {
      cb(null, 'prop-types');
    }
  },
  'react': function (cb) {
    if (process.env.NODE_ENV === 'production') {
      cb(null, 'umd/react.production.min');
    } else {
      cb(null, 'umd/react.development');
    }
  },
  'react-dom': function (cb) {
    if (process.env.NODE_ENV === 'production') {
      cb(null, 'umd/react-dom.production.min');
    } else {
      cb(null, 'umd/react-dom.development');
    }
  },
  'react-router': 'umd/ReactRouter',
  'rxjs': {
    'rxjs': 'bundles/rxjs.umd',
    'rxjs/operators': function (cb) {
      filePath = path.resolve('node_modules/rxjs/operators/index.js');
      browserify(filePath, {standalone: 'rxjs.operators'}).bundle(function (err, content) {
        if (err) {
          return cb(err);
        }
        const file = new Vinyl({
          base: path.resolve('node_modules'),
          cwd: process.cwd(),
          path: path.resolve(path.dirname(filePath), 'operators.js'),
          contents: content
        });
        cb(null, file);
      });
    }
  },
  'socket.io-client': 'dist/socket.io',
  'xlsx': 'dist/xlsx.full.min'
};
