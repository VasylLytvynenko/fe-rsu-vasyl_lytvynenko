'use strict';

function Calculator() {

    this.result = 0;

    this.add = function (value) {
        this.result += value;
        return this;
    };

    this.substract = function (value) {
        this.result -= value;
        return this;
    };

    this.divide = function (value) {
        this.result /= value;
        return this;
    };

    this.multiply = function (value) {
        this.result *= value;
        return this;
    };

    this.reset = function () {
        this.result = 0;
        return this;
    };

    this.getResult = function () {
        return this.result;
    };

    this.getInitialState = function (callback) {
        setTimeout(function () {
            callback();
        }, 5000);
    };
}

function setResult(n){
    return this.result = n;
}

var calc = new Calculator();

calc.getInitialState(setResult.bind(calc,5));

setTimeout(function () {console.log("current state: "+calc.getResult())},1000);
setTimeout(function () {console.log("current state: "+calc.getResult())},6000);