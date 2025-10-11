// don't change main array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let sum = numbers.reduce((previousValue, currentValue, currentIndex, arr) => {
    return previousValue * currentValue;
}, 1);

console.log(sum);
