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
    console.log(arr);
}

bSort([48, 26, 78]);
bSort([-23, -456, 0]);