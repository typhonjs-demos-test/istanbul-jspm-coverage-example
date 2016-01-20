# istanbul-jspm-coverage-example
Presently Istanbul doesn't have a hook for coverage of tests using JSPM / SystemJS; this is a test repo.

Please refer to the following issues:
- [Istanbul Issue #498](https://github.com/gotwarlost/istanbul/issues/498)
- [SystemJS Issue #992](https://github.com/systemjs/systemjs/issues/992)

When a solution is finalized this repo will live on as an example integration.

Update:
- [Guy Bedford mentions a possible hook implementation for Istanbul for SystemJS](https://github.com/systemjs/systemjs/issues/992#issue-123994098)

To setup:
- npm install -g jspm  (if not already installed globally)
- npm install
- jspm install

To run tests:
- npm run test-jspm    (shows that a test w/ JSPM does not provide coverage w/ Istanbul)
- npm run test-vanilla (shows that the setup works for vanilla ES6 / coverage generated)

Test scripts are defined in [package.json](https://github.com/typhonjs-demos/istanbul-jspm-coverage-example/blob/master/package.json#L31-L32)

Output:
- This is what the vanilla test looks like and shows coverage running
![vanilla test](http://i.imgur.com/1lsGLl8.png)

- This is what the JSPM test looks like and shows no coverage running :(
![vanilla test](http://i.imgur.com/kVzJK6x.png)
