"use strict"

function bSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j + 1]) {
                let swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}

function searchIndex(arr, n) {
    let flag;
    arr.forEach(function (val) {
        if(val === n)
            flag = n;
    });
    if(flag)
        console.log(arr.indexOf(flag));
    else {
        arr.push(n);
        let newArr = bSort(arr);
        console.log(newArr.indexOf(n));
    }
}

searchIndex([21, -9, 15, 2116, -71, 33], -71);
searchIndex([ 36, -12, 47, -58, 148, -55, -19, 10], -56);
searchIndex([5, 46, 17, -2, 89, 0, 26 ], 36);