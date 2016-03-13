import _ from 'underscore';

/**
 * Provides a simple test that loads Underscore via JSPM / SystemJS.
 */
class Test
{
   run() { return _.extend({ test: 'testvalue' }, { test2: 'testvalue2' }); }
}

export default new Test();