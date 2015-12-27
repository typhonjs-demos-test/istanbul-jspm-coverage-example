import { assert } from 'chai';
import jspm       from 'jspm';

// Set the package path to the local root where config.js is located.
jspm.setPackagePath(process.cwd());

// Create SystemJS Loader
var System = new jspm.Loader();

describe('JSPM', () =>
{
   let test;

   // Load the src jspm module which exports an instance of `Test` class.
   before(() =>
   {
      return System.import('src/jspm/jspm.js').then((module) =>
      {
         test = module['default'];
      });
   });

   // Execute `run` method of `Test` class and verify result.
   it('Test', () =>
   {
      const result = test.run();

      assert(result.test === 'testvalue');
      assert(result.test2 === 'testvalue2');
   });
});