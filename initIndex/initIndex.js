"use strict"

function valInit(arr) {
    let j = 0;
    let sorted = arr.sort();
    let newArr = [];
    for(let i = 0; i < 100; i++) {
        if(i === sorted[j]) {
            newArr.push(sorted[j]);
            j++;
        }
        else newArr.push(undefined);
    }
    console.log(newArr);
} 


valInit([4, 3, 0, 9]);
valInit([26, 30, 19, 5]);