import {it, expect} from 'vitest';
import {transformToNumber} from './numbers';

it('should transform a string to a number', () => {
	// Arrange
	const number = '1';
	
	// Act
	const result = transformToNumber(number);
	
	// Assert
	const expectedResult = Number(number);
	expect(result).toBe(expectedResult);
});

it('should transform a double quoted string to a number', () => {
	// Arrange
	const number = "1";
	
	// Act
	const result = transformToNumber(number);
	
	// Assert
	const expectedResult = Number(number);
	expect(result).toBe(expectedResult);
});

it('should transform a curly quoted string to a number', () => {
	// Arrange
	const number = `1`;
	
	// Act
	const result = transformToNumber(number);
	
	// Assert
	const expectedResult = Number(number);
	expect(result).toBe(expectedResult);
});

it('should throw an error if no value is passed into the function', () => {
	// Arrange
	
	
	// Act
	const resultFn = () => {
		transformToNumber();
	};
		
	// Assert
	expect(resultFn).toThrow("NaN");
});

it('should throw an error if value is not a number is passed into the function', () => {
	// Arrange
	const input = 'text';
	
	// Act
	const resultFn = () => {
		transformToNumber(input);
	};
		
	// Assert
	expect(resultFn).toThrow("NaN");
});

////////////////////////
it('should transform a string number to a number of type number',() => {
	// Arrange
	const input = '1';
	
	// Act
	const result = transformToNumber(input);
		
	// Assert
	const expectedResult = Number(input);
	expect(result).toBeTypeOf('number') &&
	expect(result).toBe(expectedResult);	
});

it('should yield NaN for non-transformable values', ()=>{
	// Arrange
	const input = 'invalid';
	const input2 = {};
	
	// Act
	const resultFn = () => {
		transformToNumber(input);
	};
	const resultFn2 = () => {
		transformToNumber(input2);
	};
	
	// Assert
	const expectedResult = Number(input);
	expect(expectedResult).toBeNaN() &&
	expect(resultFn).toThrow("NaN");
	
	const expectedResult2 = Number(input2) &&
	expect(resultFn2).toThrow("NaN");
});