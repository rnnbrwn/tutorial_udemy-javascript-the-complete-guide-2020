const defaultResult = 0;
let currentResult = 0;
let logEntries = [];

function getUserNumberInput() {
	return +userInput.value;
}

function createAndWriteLog(operator, resultBeforeCalc, CalcNumber) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${CalcNumber}`;
	outputResult(currentResult, calcDescription);
}

function add() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult += enteredNumber;
	createAndWriteLog('+', initialResult, enteredNumber);
	logEntries.push(enteredNumber);
	console.log(logEntries[0]);
}

function subtract() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult -= enteredNumber;
	createAndWriteLog('-', initialResult, enteredNumber);
}

function multiply() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult *= enteredNumber;
	createAndWriteLog('*', initialResult, enteredNumber);
}

function divide() {
	const enteredNumber = getUserNumberInput();
	const initialResult = currentResult;
	currentResult /= enteredNumber;
	createAndWriteLog('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
