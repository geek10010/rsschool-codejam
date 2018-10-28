const make = (...args) => {
  const allArgs = [...args];

  function collect(next, ...rest) {
    if (typeof next !== 'function') {
      allArgs.push(next, ...rest);
      return collect;
    }
    return allArgs.reduce((acc, item) => next(acc, item));
  }

  return collect;
};

module.exports = make;
