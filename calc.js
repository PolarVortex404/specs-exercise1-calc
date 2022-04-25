const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	switch(mathSymbol) {
		case '+':
			console.log('Addition', num1 + num2);
			break;
		case '-':
			console.log('Subtraction', num1 - num2);
			break;
		case '*':
			console.log('Multiplication', num1 * num2);
			break;
		case '/':
			console.log('Division', num1 / num2);
			break;
		case 'SQRT':
			console.log('Square Root', Math.sqrt(num1));
			break;
	}

	// This line closes the connection to the command line interface.
	reader.close()

});
