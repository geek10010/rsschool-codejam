const assert = require('assert');

Object.freeze(assert);

const sumOfOther = require('./src/sumOfOther');

describe('sumOfOther', () => {
  it('1', () => {
    const result = sumOfOther([2, 3, 4, 1]);
    assert.deepStrictEqual(result, [8, 7, 6, 9]);
  });

  it('2', () => {
    const result = sumOfOther([3, 18, 7, 9, 5]);
    assert.deepStrictEqual(result, [39, 24, 35, 33, 37]);
  });
  it('3 one argument', () => {
    const result = sumOfOther([8]);
    assert.deepStrictEqual(result, [0]);
  });
  it('4 negative argument', () => {
    const result = sumOfOther([-3, 4, 5]);
    assert.deepStrictEqual(result, [9, 2, 1]);
  });
  it('5 empty array', () => {
    const result = sumOfOther([]);
    assert.deepStrictEqual(result, []);
  });
});
