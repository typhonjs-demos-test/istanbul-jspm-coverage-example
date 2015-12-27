# istanbul-jspm-coverage-example
Presently Istanbul doesn't have a hook for coverage of tests using JSPM; this is a test repo.

Please refer to [Issue #498](https://github.com/gotwarlost/istanbul/issues/498)

When a solution is finalized this repo will live on as an example integration.

To setup:
- npm install -g jspm  (if not already installed globally)
- npm install
- jspm install

To run tests:
- npm run test-jspm    (shows that a test w/ JSPM does not provide coverage w/ Istanbul)
- npm run test-vanilla (shows that the setup works for vanilla ES6 / coverage generated)

Test scripts are defined in [package.json](https://github.com/typhonjs/istanbul-jspm-coverage-test/blob/master/package.json#L31)

Output:
- This is what the vanilla test looks like and shows coverage running
![vanilla test](http://i.imgur.com/1lsGLl8.png)

- This is what the JSPM test looks like and shows no coverage running :(
![vanilla test](http://i.imgur.com/kVzJK6x.png)
