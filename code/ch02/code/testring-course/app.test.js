const { add } = require('./math');

it('should yield the expected sum of two numbers', () => {
	const num1 = 1;
	const num2 = 2;
	const result = add([num1, num2]);
	expect(result).toBe(num1 + num2);
});