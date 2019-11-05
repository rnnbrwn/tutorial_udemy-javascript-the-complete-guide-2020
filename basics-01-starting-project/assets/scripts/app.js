const defaultResult = 0;
let currentResult = 0;
let logEntries = [];

// Supporting functions
function getUserNumberInput() {
	return +userInput.value;
}

function createAndWriteOutput(operator, resultBeforeCalc, CalcNumber) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${CalcNumber}`;
	outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
	const logEntry = {
		operation: operationIdentifier,
		prevResult: prevResult,
		number: operationNumber,
		result: newResult
	};
	logEntries.push(logEntry);
	console.log(logEntries);
}

// Primary functions
function add() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult += enteredNumber;
	createAndWriteOutput('+', initialResult, enteredNumber);
	writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult -= enteredNumber;
	createAndWriteOutput('-', initialResult, enteredNumber);
	writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult *= enteredNumber;
	createAndWriteOutput('*', initialResult, enteredNumber);
	writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult /= enteredNumber;
	createAndWriteOutput('/', initialResult, enteredNumber);
	writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
