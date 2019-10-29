"use strict";
exports.__esModule = true;
function add() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var b = getPow.apply(void 0, args);
    var result = 0;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var num = args_1[_a];
        result += num * (Math.pow(10, b));
    }
    return result / (Math.pow(10, b));
}
function sub() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var b = getPow.apply(void 0, args);
    var result = 0;
    var i = 0;
    for (var _a = 0, args_2 = args; _a < args_2.length; _a++) {
        var num = args_2[_a];
        if (i === 0) {
            result = num * (Math.pow(10, b));
        }
        else
            result -= num * (Math.pow(10, b));
        i++;
    }
    return result / (Math.pow(10, b));
}
function multi() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var b = getPow.apply(void 0, args);
    var result = 1;
    for (var _a = 0, args_3 = args; _a < args_3.length; _a++) {
        var num = args_3[_a];
        result *= num * (Math.pow(10, b));
    }
    return result / (Math.pow(10, (b * args.length)));
}
function div(num1, num2) {
    if (!num2 || typeof num2 !== 'number')
        throw new Error("The denominator should be a number and cannot be zero");
    var b = 0;
    var num1Arr = (Number(num1) || 0).toString().split('.');
    var num2Arr = (Number(num2) || 0).toString().split('.');
    b = (Number(num1Arr[1]) || 0) > (Number(num2Arr[1]) || 0) ? (Number(num1Arr[1]) || 0) : (Number(num2Arr[1]) || 0);
    return (num1 * (Math.pow(10, b))) / (num2 * (Math.pow(10, b)));
}
function getPow() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var b = 0;
    for (var _a = 0, args_4 = args; _a < args_4.length; _a++) {
        var num = args_4[_a];
        if (num === undefined || num === null) {
            console.warn("operation param is error");
        }
        var numStr = (Number(num) || 0).toString();
        var numArr = numStr.split('.');
        if (numArr.length == 2 && numArr[1].length > b) {
            b = numArr[1].length;
        }
    }
    return b;
}
var Decimal = {
    add: add,
    sub: sub,
    multi: multi,
    div: div
};
exports["default"] = Decimal;
