"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator_1 = require("./Calculator");
var readline_sync_1 = require("readline-sync");
var cont = true;
do {
    var first_number = readline_sync_1.questionInt("Enter first number: ");
    var operation = readline_sync_1.question("Type operation(+, - , *, /, ^, nthRoot): ");
    var second_number = readline_sync_1.questionInt("Enter second number: ");
    var result = void 0;
    var calc = new Calculator_1.Calculator({ first_number: first_number, second_number: second_number });
    if (operation == '+') {
        result = calc.sum();
    }
    else if (operation == '-') {
        result = calc.substract();
    }
    else if (operation == '*') {
        result = calc.multiplication();
    }
    else if (operation == '/') {
        result = calc.division();
    }
    else if (operation == '^') {
        result = calc.pow();
    }
    else if (operation == 'nthRoot') {
        result = calc.nthpower();
    }
    console.log("Answear: ", result);
    var status_1 = readline_sync_1.question("Try again?[y/n]: ");
    if (status_1 == 'n') {
        cont = false;
    }
    else if (status_1 == 'y') {
        cont = true;
    }
} while (cont);
