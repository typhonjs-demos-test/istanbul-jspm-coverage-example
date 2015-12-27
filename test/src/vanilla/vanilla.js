import { assert } from 'chai';
import test       from '../../../src/vanilla/vanilla.js';

describe('Vanilla', function ()
{
   it('Test', function ()
   {
      const result = test.run();

      assert(result.test === 'testvalue');
      assert(result.test2 === 'testvalue2');
   });
});
