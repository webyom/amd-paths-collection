const browserify = require('./browserify');

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
  'invariant': function (cb) {
    browserify('invariant/browser.js', 'invariant', cb);
  },
  'jsbarcode': 'dist/JsBarcode.all',
  'mobx': 'lib/mobx.umd',
  'mobx-state-tree': 'dist/mobx-state-tree.umd',
  'moment-precise-range': function (cb) {
    browserify('moment-precise-range/index.js', 'momentPreciseRange', cb);
  },
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
  'reflux-promise': function (cb) {
    browserify('reflux-promise/lib/index.js', 'refluxPromise', cb);
  },
  'rxjs': {
    'rxjs': 'bundles/rxjs.umd',
    'rxjs/operators': function (cb) {
      browserify('rxjs/operators/index.js', 'rxjsOperators', cb, 'operators.js');
    }
  },
  'socket.io-client': 'dist/socket.io',
  'warning': function (cb) {
    browserify('warning/browser.js', 'warning', cb);
  },
  'xlsx': 'dist/xlsx.full.min'
};
