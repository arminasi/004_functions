"use strict"

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddOrEven = function (n) {
    if(n % 2)
        console.log("even");
    else
        console.log("odd");
}

for(let i = 0; i < arr.length; i++) {
    oddOrEven(arr[i]);
}