"use strict"

function minMaxLenSum(arr) {
    let length = [];
    arr.forEach(function (val) {
        length.push(val.length);
    });
    console.log((Math.min(...length) + Math.max(...length)));
}

minMaxLenSum(["anymore", "raven", "me", "communicate"]);
minMaxLenSum(["wish", "slightly", "understand", "longer", "unexpected", "heart"]);