 "use strict"
 
 function pyramid(n) {

     let num = 1;
     for(let i = 1; i <= n; i++) {
         for(let j = 1; j <= i; j++) {
             document.write((num * i + (j * 4)) - 4 + " ");
         }
         document.write("</br>");
     }
}

pyramid(4);

