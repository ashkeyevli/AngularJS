import { Component, OnInit} from '@angular/core';
import {formatNumber} from '@angular/common';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit{
  result = '';

  buttons: string[] = ['%', 'CE', 'C', 'b', '1/x', 'x^2', 'sqrt', '/', '7', '8', '9', '*', '4', '5', '6'
    , '-', '1', '2', '3', '+', '+/-', '0', '.', '='];
  private preValue = '';
  private answer = 0;
  private curValue = '';
  constructor() { }
  ngOnInit(): void {}


  addToExpression(value: string){
    if (this.result !== ''){
      this.preValue = this.curValue;
      this.curValue = value;
    }


    if (value === 'C'){
      this.result = '';
    }else if (value === 'b') {
      this.result = this.preValue !== '=' ? this.result.slice(0, -1) : this.result;
    }
    else if (value === '1/x'){
      this.result = (1.0 / parseFloat(this.result)).toString();
    }
    else if (value === 'x^2'){
      this.result = (Math.pow(parseFloat(this.result), 2)).toString();
    }
    else if (value === 'sqrt'){
      this.result = (Math.pow(parseFloat(this.result),  1 / 2)).toString();
    }

    else if (value === '+/-'){
      console.log(this.curValue, this.preValue, this.result)
      if (parseFloat(this.result) > 0){
        this.result = '-' + this.result;
      } else{
        this.result = (this.result).toString().slice(1, this.result.length);
      }
    }
    else if (value === '='){
      // tslint:disable-next-line:no-eval
      this.result = eval(this.result);

    }else{
      this.result += value;
    }

  }



}
