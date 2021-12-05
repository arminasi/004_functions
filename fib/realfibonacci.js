"use strict"

function fib(n) {
    if(n < 2)
        return n;
    return  fib(n - 1) + fib(n - 2);
}

console.log(fib(0));
console.log(fib(2));
console.log(fib(10));
console.log(fib(20));