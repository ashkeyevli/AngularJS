export class Calculator {

    constructor(obj: Partial<Calculator>){
       Object.assign(this,obj);
    }

    first_number: number;
    second_number: number;

    sum() {
        return this.first_number + this.second_number;
    }

    substract(){
        return this.first_number - this.second_number;
    }

    multiplication(){
        return this.first_number * this.second_number;
    }

    division(){
        return this.first_number / this.second_number;
    }

    pow(){
        return Math.pow(this.first_number,this.second_number);
    }

    nthpower(){
        return Math.pow(this.first_number, 1/this.second_number);
    }  

}