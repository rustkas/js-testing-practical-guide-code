import {it, expect} from 'vitest';
import {validateStringNotEmpty, validateNumber} from './validation';

it("should string is not empty", () =>{
	// Arrange
	const string = '1';
	
	// Act
	const resultFn = () => {
		validateStringNotEmpty(string);
	};
	
	// Assert
	expect(resultFn).not.toThrow();
	
});

it("should value is a number", () =>{
	// Arrange
	const number = 1;
	
	// Act
	const resultFn = () => {
		validateNumber(number);
	};
	
	// Assert
	expect(resultFn).not.toThrow();
	
});

it("should value is not a number", () =>{
	// Arrange
	const number = '1';
	
	// Act
	const resultFn = () => {
		validateNumber(number);
	};
	
	// Assert
	expect(resultFn).toThrow();
	
});