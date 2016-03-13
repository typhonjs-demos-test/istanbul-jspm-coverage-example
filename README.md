# istanbul-jspm-coverage-example
At one point in time Istanbul didn't have a hook for coverage of tests using JSPM / SystemJS.

Please refer to the following issues:
- [Istanbul Issue #498](https://github.com/gotwarlost/istanbul/issues/498)
- [SystemJS Issue #992](https://github.com/systemjs/systemjs/issues/992)

A solution is now available that replaces the System.translate function with one that instruments code coverage that is easily setup from standard testing environments including Mocha.

In particular please review the following NPM modules:
- [typhonjs-istanbul-instrument-jspm](https://www.npmjs.com/package/typhonjs-istanbul-instrument-jspm)
- [typhonjs-npm-build-test](https://www.npmjs.com/package/typhonjs-npm-build-test)

`typhonjs-istanbul-instrument-jspm` provides the instrumentation hook. 

`typhonjs-npm-build-test` provides an all inclusive 

To setup:
- npm install -g jspm  (if not already installed globally)
- npm install
- jspm install

To run tests with coverage for SystemJS:
- npm run test-coverage

A coverage report is then available in `./coverage` and contains the source code in [./src](https://github.com/typhonjs-demos-test/istanbul-jspm-coverage-example/tree/master/src) loaded by SystemJS in [./test/src/TestJSPM.js](https://github.com/typhonjs-demos-test/istanbul-jspm-coverage-example/blob/master/test/src/TestJSPM.js)

Test scripts are defined in [package.json](https://github.com/typhonjs-demos-test/istanbul-jspm-coverage-example/blob/master/package.json#L27-L29)

As a bonus examples of using ESLint and ESDoc which is included in `typhonjs-npm-build-test` are also available as NPM scripts.
