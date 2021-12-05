"use strict"

function collectSum(arr) {
    let newArr = [];
    newArr = arr.map(function (mini) {
        return (mini.reduce(function (acc, elem) {
            return acc + elem;
        }, 0))
    })
    console.log(newArr);
};

collectSum([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]);
collectSum([[8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0,-1]]);
collectSum([[1], [2], [3], [4]]);