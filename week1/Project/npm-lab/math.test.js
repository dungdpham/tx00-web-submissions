const add = require('./math');

test('add 1 + 2 equal 3', () => {
    expect(add(1, 2)).toBe(3);
});