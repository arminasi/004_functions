"use strict"

function productOfThree(a, b, c) {
    let total = a * b * c;
    if(total === 0)
        console.log("unsigned");
    else if(total < 0)
        console.log("-");
    else
        console.log('+');
}

productOfThree(-14, 5, 0);
productOfThree(-8, 9, -6);
productOfThree(4, 19, -2);