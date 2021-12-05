"use strict"

function prodAndSumDiv(n) {
    if(n === 0)
        console.log("Cannot calculate");
    else {

        let total = n.toString().split('').map(function(val) {
            return parseInt(val);
        });
        let totalSum = total.reduce(function (acc, elem) {
            return acc + elem;
        },0);
        let totalProd = total.reduce(function(acc, elem) {
            return acc * elem;
        }, 1);
        if(totalProd % totalSum === 0)
            console.log("Quotient is " + totalProd / totalSum);
        else
            console.log("Remainder is " + totalProd % totalSum);
    }
}

prodAndSumDiv(1233);
prodAndSumDiv(5);
prodAndSumDiv(0);
prodAndSumDiv(455);