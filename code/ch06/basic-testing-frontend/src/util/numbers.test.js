import {describe, it, expect} from 'vitest';
import {transformToNumber, cleanNumbers} from './numbers';

describe('transformToNumber(value)', () => {
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
		expect(expectedResult).toBeNaN();
		
		const expectedResult2 = Number(input2);
	});	
});

describe('cleanNumbers(numberInputs)', () => {
	it('should return an array of number values if an array of string number values is provided', ()=>{
		// Arrange
		const numberValues = ['1', '2'];
		
		// Act
		const cleanedNumbers = cleanNumbers(numberValues);
		
		// Assert
		expect(cleanedNumbers).toEqual([1,2]);
	});	
	
	it('should throw an error if an array with at least one empty string is provided', () => {
		// Arrange
		const numberValues = ['', '2'];
		
		// Act
		const cleanFn = () => {
			cleanNumbers(numberValues);	
		};
		
		// Assert
		expect(cleanFn).toThrow();
	});
});

