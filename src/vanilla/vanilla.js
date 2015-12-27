/**
 * Provides a simple vanilla ES6 test that matches the output of the JSPM `Test` class.
 */
class Test
{
   run() { return { test: 'testvalue', test2: 'testvalue2' }; }
}

export default new Test();