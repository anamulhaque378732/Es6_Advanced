// Array.prototype.findIndex();


let numbers = [1, 2, 42, 45, 5, 65, 7, 8, 10, 10, 45, 56, 13, 14, 85, 16, 17, 45, 19];


const number = numbers.findIndex((currentValue, index, arr) => {
    // return !(currentValue % 2);
    return currentValue > 100
}, this)

console.log(number);











