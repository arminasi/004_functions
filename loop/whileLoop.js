"use strict"

    //while
    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let i = 0;

    while(i < a.length) {
        console.log("for", i, a[i]);
        i++;
    }
    
    console.log("");
    
    //do-while
    let j = 0;

    do {
        console.log("for", j, a[j]);
        j++;
    } while(j < a.length);