const defaultResult = 0;
let currentResult = 0;

function add(a, b) {
	const result = a + b;
	return result;
}

currentResult = add(1, 2);

// Changed concatenated string to Template Literal
let calculatorDescription = `${defaultResult} + 10`;

outputResult(currentResult, calculatorDescription);
