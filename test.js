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


const make = require('./src/make');

describe('make', () => {
  const sum = (a, b) => a + b;
  const mult = (a, b) => a * b;

  it('1 sum', () => {
    const result = make(15)(34, 21, 666)(41)(sum);
    assert.equal(result, 777);
  });

  it('2 sum, additional arguments', () => {
    const result = make(15, 4)(34, 21, 666)(41, 7)(sum);
    assert.equal(result, 788);
  });

  it('3 multiply', () => {
    const result = make(2)(3, 4)(5)(mult);
    assert.equal(result, 120);
  });

  it('4 multiply, additional', () => {
    const result = make(2, 4)(3, 4)(5, 3)(mult);
    assert.equal(result, 1440);
  });
});


const recursion = require('./src/recursion');

describe('recursion', () => {
  it('1', () => {
    const tree = {
      value: 100,
      left: { value: 90, left: { value: 70 }, right: { value: 99 } },
      right: { value: 120, left: { value: 110 }, right: { value: 130 } },
    };
    const array = recursion(tree);

    assert.deepStrictEqual(array, [[100], [90, 120], [70, 99, 110, 130]]);
  });
});
