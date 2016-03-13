import _ from 'underscore';

/**
 * Provides a simple test that loads Underscore via JSPM / SystemJS.
 */
class Test
{
   /**
    * A simple test using Underscore.
    *
    * @returns {string}
    */
   run() { return _.extend({ test: 'testvalue' }, { test2: 'testvalue2' }); }
}

/**
 * Exports an instance of Test.
 */
export default new Test();