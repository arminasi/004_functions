"use strict"

function lstElAddToFront(n) {
    let convertString = n.toString().split('');
    let last = convertString.slice(-1);
    if(parseInt(...last) === 0) {
        console.log(n);
    }
    else {
        let newArr = [...last].concat(convertString);
        newArr.pop();
        console.log(parseInt(newArr.join('')));
    }

}

lstElAddToFront(367);
lstElAddToFront(1002);
lstElAddToFront(250);
lstElAddToFront(8);
