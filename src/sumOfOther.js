const sumOfOther = (arr) => {
  const sumAll = arr.reduce((sum, current) => sum + current, 0);
  return arr.map(val => sumAll - val);
};

module.exports = sumOfOther;
