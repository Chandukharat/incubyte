const add = require('./stringCalculator');

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('returns the number itself when one number is provided', () => {
  expect(add("1")).toBe(1);
});

test('returns the sum of two numbers', () => {
  expect(add("1,5")).toBe(6);
});


test('returns the sum of multiple numbers', () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });
  
  test('returns the sum of more than two numbers', () => {
    expect(add("10,20,30,40")).toBe(100);
  });

  test('returns the sum of numbers with new lines between them', () => {
    expect(add("1\n2,3")).toBe(6);
  });
  
  test('returns the sum of numbers with only new lines between them', () => {
    expect(add("1\n2\n3")).toBe(6);
  });

  test('returns the sum of numbers with a custom delimiter', () => {
    expect(add("//;\n1;2")).toBe(3);
  });
  
  test('returns the sum of numbers with a different custom delimiter', () => {
    expect(add("//|\n1|2|3")).toBe(6);
  });