const { decideType } = require('./triangle');

// ---- Happy/Valid test cases ----
test('equilateral', () => {
  expect(decideType([9, 9, 9])).toBe('equilateral');
});

test('scalene', () => {
  expect(decideType([9, 8, 7])).toBe('scalene');
});

test('isosceles', () => {
  expect(decideType([5, 5, 4])).toBe('isosceles');
});

test('isosceles permutation 1', () => {
  expect(decideType([5, 4, 5])).toBe('isosceles');
});

test('isosceles permutation 2', () => {
  expect(decideType([4, 5, 5])).toBe('isosceles');
});

// ---- Invalid input cases ----
test('negative value', () => {
  expect(decideType([6, 7, -2])).toBe('invalid');
});

test('zero value', () => {
  expect(decideType([4, 5, 0])).toBe('invalid');
});

test('all zeros', () => {
  expect(decideType([0, 0, 0])).toBe('invalid');
});

test('two values only', () => {
  expect(decideType([4, 7])).toBe('invalid');
});

test('four values', () => {
  expect(decideType([4, 6, 2, 4])).toBe('invalid');
});

test('single value', () => {
  expect(decideType([4])).toBe('invalid');
});

test('floats invalid 1', () => {
  expect(decideType([1.9, 2.3, 3])).toBe('invalid');
});

test('floats invalid 2', () => {
  expect(decideType([4.0, 4.0, 3.0])).toBe('isosceles');
});

test('strings invalid', () => {
  expect(decideType(['v', 'c', 't'])).toBe('invalid');
});

test('mixed int/string', () => {
  expect(decideType([3, 3, 't'])).toBe('invalid');
});

test('special characters', () => {
  expect(decideType(['%', '@', '$'])).toBe('invalid');
});

// ---- Triangle inequality ----
test('triangle inequality 1', () => {
  expect(decideType([3, 3, 7])).toBe('invalid');
});

test('triangle inequality permutation 1', () => {
  expect(decideType([3, 7, 3])).toBe('invalid');
});

test('triangle inequality permutation 2', () => {
  expect(decideType([7, 3, 3])).toBe('invalid');
});

test('triangle inequality equal sides 1', () => {
  expect(decideType([2, 2, 4])).toBe('invalid');
});

test('triangle inequality equal sides 2', () => {
  expect(decideType([1, 2, 3])).toBe('invalid');
});

// Multiple permutations
test('1, 3, 2', () => {
  expect(decideType([1, 3, 2])).toBe('invalid');
});

test('3, 2, 1', () => {
  expect(decideType([3, 2, 1])).toBe('invalid');
});

test('3, 1, 2', () => {
  expect(decideType([3, 1, 2])).toBe('invalid');
});

test('2, 1, 3', () => {
  expect(decideType([2, 1, 3])).toBe('invalid');
});

test('2, 3, 1', () => {
  expect(decideType([2, 3, 1])).toBe('invalid');
});
