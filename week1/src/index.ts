import {Calculator} from './Calculator';
import { questionInt, question } from "readline-sync";

let cont = true;
do {
    const first_number = questionInt("Enter first number: ");
    let operation = question("Type operation(+, - , *, /, ^, nthRoot): ");
    const second_number = questionInt("Enter second number: ");
    let result: number;

    const calc = new Calculator({first_number, second_number});
    if(operation == '+'){
        result = calc.sum();
    }
    else if(operation == '-'){
        result = calc.substract();
    }
    else if(operation == '*'){
        result = calc.multiplication();
    }
    else if(operation == '/'){
        result = calc.division();
    }
    else if(operation == '^'){
        result = calc.pow();
    }
    else if(operation == 'nthRoot'){
        result = calc.nthpower();
    }

    console.log("Answear: ", result);
    let status = question("Try again?[y/n]: ");
    if(status == 'n'){
        cont = false;
    }
    else if(status == 'y'){
        cont = true
    }
    
}
while(cont);

