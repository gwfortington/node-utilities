import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { Debug, MessageType } from 'node-debug';
import { areObjectsEqual, pickObjectKeys } from '../dist';

describe('main', (suiteContext) => {
  Debug.initialize(true);
  let debug: Debug;
  it('areObjectsEqual', (testContext) => {
    debug = new Debug(`${suiteContext.name}.test.${testContext.name}`);
    debug.write(MessageType.Entry);
    const date = new Date();
    const firstObject = { a: 1, b: 2, c: 3, d: date };
    debug.write(
      MessageType.Value,
      `firstObject=${JSON.stringify(firstObject)}`,
    );
    const secondObject = { a: 1, b: 2, c: '3', d: date };
    debug.write(
      MessageType.Value,
      `secondObject=${JSON.stringify(secondObject)}`,
    );
    const result = areObjectsEqual(firstObject, secondObject);
    debug.write(MessageType.Value, `result=${JSON.stringify(result)}`);
    debug.write(MessageType.Exit);
    assert.ok(true);
  });
  it('pickObjectKeys', (testContext) => {
    debug = new Debug(`${suiteContext.name}.test.${testContext.name}`);
    debug.write(MessageType.Entry);
    const object = { a: 1, b: 2, c: 3 };
    debug.write(MessageType.Value, `object=${JSON.stringify(object)}`);
    const keys = ['a', 'b', 'd'];
    debug.write(MessageType.Value, `keys=${JSON.stringify(keys)}`);
    const result = pickObjectKeys(object, keys);
    debug.write(MessageType.Value, `result=${JSON.stringify(result)}`);
    debug.write(MessageType.Exit);
    assert.ok(true);
  });
});
