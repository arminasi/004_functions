"use strict"

function isContain(one, few) {
    let flag = 0;
    let arr = few.toString().split('');
    arr.forEach(function(val) {
        if(one == val)
            flag++;
    })
    if(flag)
        console.log("yes");
    else
        console.log("no");
}

isContain(5, 2463);
isContain(4, 6);
isContain(8, 45689);
