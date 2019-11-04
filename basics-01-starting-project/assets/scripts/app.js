const defaultResult = 0;
let currentResult = 0;

function add() {
	currentResult = currentResult + userInput.value;
	outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);
