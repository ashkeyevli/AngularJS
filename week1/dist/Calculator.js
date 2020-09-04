"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator(obj) {
        Object.assign(this, obj);
    }
    Calculator.prototype.sum = function () {
        return this.first_number + this.second_number;
    };
    Calculator.prototype.substract = function () {
        return this.first_number - this.second_number;
    };
    Calculator.prototype.multiplication = function () {
        return this.first_number * this.second_number;
    };
    Calculator.prototype.division = function () {
        return this.first_number / this.second_number;
    };
    Calculator.prototype.pow = function () {
        return Math.pow(this.first_number, this.second_number);
    };
    Calculator.prototype.nthpower = function () {
        return Math.pow(this.first_number, 1 / this.second_number);
    };
    return Calculator;
}());
exports.Calculator = Calculator;
