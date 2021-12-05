"use strict"

//write function for reverse first and last value

function reverse(n) {
    let newStr = n.toString().split('');
    let len = newStr.length;
    if(len === 1)
        console.log(n);
    else {
        let last = newStr.slice(-1);
        let first = newStr.slice(0, 1);
        let middle = newStr.slice(1, -1);
        console.log(parseInt((last.concat(middle).concat(first)).join('')));
    }
}

reverse(2);
reverse(13)
reverse(895769);
