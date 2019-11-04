const task3Element = document.getElementById('task-3');

//Create two new functions: One that takes no parameters and simply shows an alert() with some text of your choice and one that receives a name as a parameter and then uses alert() to output that name.

function alertFunction() {
	alert('Hello World!');
}

function updatedAlertFunction(a) {
	alert(a);
}

// Call both functions directly from your code.

// alertFunction();
// alert('boom');

// Add an event listener to task3Element and attach it to the first function (the one without arguments). Click this task thereafter to verify whether it works.

task3Element.addEventListener('click', alertFunction);

// Add a brand-new function that takes three parameters (three strings, give them any names you want) that returns one combined string (where the three strings are concatenated).

function thirdFunction(a, b, c) {
	return `${a} ${b} ${c}`;
}

// Call that new function directly from your code and alert() the result of that function.

alert(thirdFunction('rita', 'sue', 'bob'));
