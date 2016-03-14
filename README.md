# istanbul-jspm-coverage-example

[![Code Style](https://img.shields.io/badge/code%20style-allman-yellowgreen.svg?style=flat)](https://en.wikipedia.org/wiki/Indent_style#Allman_style)
[![License](https://img.shields.io/badge/license-MIT-yellowgreen.svg?style=flat)](https://github.com/typhonjs-demos-test/istanbul-jspm-coverage-example/blob/master/LICENSE)
[![Gitter](https://img.shields.io/gitter/room/typhonjs/TyphonJS.svg)](https://gitter.im/typhonjs/TyphonJS)

[![Build Status](https://travis-ci.org/typhonjs-demos-test/istanbul-jspm-coverage-example.svg?branch=master)](https://travis-ci.org/typhonjs-demos-test/istanbul-jspm-coverage-example)
[![Coverage](https://img.shields.io/codecov/c/github/typhonjs-demos-test/istanbul-jspm-coverage-example.svg)](https://codecov.io/github/typhonjs-demos-test/istanbul-jspm-coverage-example)
[![Dependency Status](https://www.versioneye.com/user/projects/56e69b2cdf573d00472cd624/badge.svg?style=flat)](https://www.versioneye.com/user/projects/56e69b2cdf573d00472cd624)

At one point in time [Istanbul](https://gotwarlost.github.io/istanbul/) didn't have a hook for coverage of tests using [JSPM](http://jspm.io/) / [SystemJS](https://github.com/systemjs/systemjs). 

Please refer to the following issues:
- [Istanbul Issue #498](https://github.com/gotwarlost/istanbul/issues/498)
- [SystemJS Issue #992](https://github.com/systemjs/systemjs/issues/992)

A solution is now available that replaces the System.translate function with one that instruments code coverage that is easily setup from standard testing environments including Mocha.

In particular please review the following NPM modules:
- [typhonjs-istanbul-instrument-jspm](https://www.npmjs.com/package/typhonjs-istanbul-instrument-jspm)
- [typhonjs-npm-build-test](https://www.npmjs.com/package/typhonjs-npm-build-test)

`typhonjs-istanbul-instrument-jspm` provides the instrumentation hook. 

`typhonjs-npm-build-test` provides an all inclusive NPM module with dependencies for building / testing / publishing NPM modules and instrumenting JSPM / SystemJS tests.

Please note that Node 5+ / NPM 3+ may be required due to flat package installation introduced in NPM v3.

To setup:
- npm install -g jspm  (if not already installed globally)
- npm install
- jspm install

To run tests with coverage for SystemJS:
- npm run test-coverage

A coverage report is then available in `./coverage` and contains the source code in [./src](https://github.com/typhonjs-demos-test/istanbul-jspm-coverage-example/tree/master/src) loaded by SystemJS in [./test/src/TestJSPM.js](https://github.com/typhonjs-demos-test/istanbul-jspm-coverage-example/blob/master/test/src/TestJSPM.js)

Coverage on pushes is generated by Travis CI and uploaded to Codecov. Click the "coverage" icon at the top to see the SystemJS loaded code that is automatically hosted on Codecov. If you happen to have the [Codecov Chrome extension](https://chrome.google.com/webstore/detail/codecov-extension/keefkhehidemnokodkdkejapdgfjmijf?hl=en-US) installed when you view the source on GitHub the latest coverage report is overlayed on top.

Test scripts are defined in [package.json](https://github.com/typhonjs-demos-test/istanbul-jspm-coverage-example/blob/master/package.json#L27-L29)

The hook implementation can be viewed here: [instrumentIstanbulSystem.js](https://github.com/typhonjs-node-jspm/typhonjs-istanbul-instrument-jspm/blob/master/src/instrumentIstanbulSystem.js)

As a bonus examples of using ESLint and ESDoc which is included in `typhonjs-npm-build-test` are also available as NPM scripts.
