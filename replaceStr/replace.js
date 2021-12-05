"use strict"

function strReplace(mainStr, ...arg) {
    let splitted = mainStr.split('');
    let j = 0;
    for(let i = 0; i < splitted.length; i++) {
        if(splitted[i] === "_") {
            splitted[i] = arg[j];
            j++;
            if(splitted[i + 1] === "_") {
                splitted[i] += " ";
            }
        }
    };
    console.log(splitted.join(''));
}

strReplace("_, we have a _." ,"Houston", "problem", "Exo");
strReplace("May the ____.", "force", "be", "with", "you")