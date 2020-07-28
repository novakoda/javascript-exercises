function add (num1, num2) {
	answer = num1 + num2;
	return answer;
}

function subtract (num1, num2) {
	answer = num1 - num2;
	return answer;
}

function sum(arguments) {
	sum = 0;
	for (i = 0, n = arguments.length; i < n; ++i ) {
		sum += arguments[i];
	};
	return sum;
};

function multiply (arguments) {
	answer = 1;
	for (i = 0, n = arguments.length; i < n; ++i ) {
		answer *= arguments[i];
	};
	return answer;
}

function power(num1, num2) {
	answer = num1;
	for (i = 1; i < num2; ++i ) {
		answer *= num1;
	};
	return answer;
}

function factorial(number) {
	if (number == 0) { answer = 1; } else {
		answer = number;
		for (i = 1; i < number; ++i ) {
			answer *= number - i;
		};
	}
	return answer;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}