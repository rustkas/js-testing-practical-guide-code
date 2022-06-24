import {it, expect} from 'vitest';
import {add} from './math';

// AAA - Arrange, Act, Assert pattern
// Make tests more readable
it('should summarize all number values in an array', () => {
	// Arrange
	const numbers = [1, 2];
	
	// Act
	const result = add(numbers);
	
	// Assert
	const expectedResult = numbers.reduce(
	(prevValue, curValue) => prevValue + curValue,
	0
	);
	expect(result).toBe(expectedResult);
});

it('should yield NaN if a least one invalid number is provided', () => {
	// Arrange
	const inputs = ['invalid', 1];
	
	// Act
	const result = add(inputs);
	
	
	// Assert
	expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string values is provided', () => {
	// Arrange
	const numbers = ['1', '2'];
	
	// Act
	const result = add(numbers);
	
	// Assert
	const expectedResult = numbers.reduce(
	(prevValue, curValue) => Number(prevValue) + Number(curValue),
	0
	);
	expect(result).toBe(expectedResult);	
});

it('should yield 0 if and empty array is provided', () => {
	// Arrange
	const numbers = [];
	
	// Act
	const result = add(numbers);
	
	// Assert
	const expectedResult = 0;
	expect(result).toBe(expectedResult);	
});

it('should throw an error if no value is passed into the function', () => {
	// Arrange
	
	
	// Act
	const resultFn = () => {
		add();
	};
		
	// Assert
	expect(resultFn).toThrow("numbers is not iterable");
});

it('should throw an error if provided with multiple arguments instead of an array', () => {
	// Arrange
	const num1 = 1;
	const num2 = 2;
	
	// Act
	const resultFn = () => {
		add(num1, num2);
	};
		
	// Assert
	expect(resultFn).toThrow("numbers is not iterable");
});