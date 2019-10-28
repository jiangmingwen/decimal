function add() {
    var b = getPow(arguments);
    var result = 0;
    for (var num of arguments) {
        result += num * (10 ** b);
    }
    return result / (10 ** b);
}

function sub() {
    var b = getPow(arguments);
    var result = 0;
    var i = 0;
    for (var num of arguments) {
        if (i === 0) {
            result = num * (10 ** b);
        } else result -= num * (10 ** b);
        i++;
    }
    return result / (10 ** b);
}

function multi() {
    var b = getPow(arguments);
    var result = 1;
    for (var num of arguments) {
        result *= num * (10 ** b);
    }
    return result / (10 ** (b * arguments.length));
}

function div(num1, num2) {
    if (!num2 || typeof num2 !== 'number') throw new Error("The denominator should be a number and cannot be zero");
    var b = 0;
    var num1Arr = (Number(num1) || 0).toString().split('.');
    var num2Arr = (Number(num2) || 0).toString().split('.');
    b = (num1Arr[1] || 0) > (num2Arr[1] || 0) ? (num1Arr[1] || 0) : (num2Arr[1] || 0);
    return (num1 * (10 ** b)) / (num2 * (10 ** b));
}

function getPow(args) {
    var b = 0;
    for (var num of args) {
        if (num === 'undefined' || num === null) {
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

module.exports= {
    add,
    sub,
    multi,
    div
}