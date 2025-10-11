// cannot change main array
let numbers = [4, 14, 154, 1545, 4, 54, 54, 5, 4, 5, 75, 4, 8];


let number = numbers.filter((currentValue, index, arr) => {
    return currentValue > 20
}, this);
console.log(number);






