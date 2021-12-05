"use strict"

function howManyTypes(arr) {
    let num = 0;
    let str = 0;
    arr.forEach(function (val) {
        if(typeof(val) === "number")
            num++;
        else if
            (typeof(val) === "string") 
                str++;
        else
            return;
    });
    console.log("Number: " + num, "Strings: " + str);
}

howManyTypes([1, '10', 'hi', 2, 3]);
howManyTypes([1, 4, 'i am a string', '456']);