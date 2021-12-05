"use strict"

function onlyNum(arr) {
    return arr.filter(function (val) {
        if(typeof(val) === "number")
            return val;
    });
}

console.log(onlyNum([8, 0, 1, "hey", 12, 5 , true, "2", null, 7, 3]));
console.log(onlyNum([8, 8, "meh", 6]));
console.log(onlyNum([null, null, 1, undefined, 5, 9, false]))