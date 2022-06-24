import { extractEnteredNumberValues } from './src/parser';
import { calculateResult } from './src/math';
import { generateResultText, outputResult } from './src/output';

const form = document.querySelector('form');


function formSubmitHandler(event) {
	event.preventDefault();

	const numberInputs = extractEnteredNumberValues(form);
	console.log(`numberInputs ${numberInputs}`);
	let result = calculateResult(numberInputs);
	console.log(`result ${result}`);  
	let resultText = generateResultText(result);
	console.log(`resultText ${resultText}`);  
	outputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);
