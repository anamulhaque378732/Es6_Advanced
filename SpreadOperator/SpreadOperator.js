
// spread operator


let numbers = [1, 2, 3, 4, 5, 6];
let newNumber = [numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers[5], 7, 8, 9];
// console.log(newNumber);

let anotherNumbers = [...numbers, 7, 8, 9];
// console.log(anotherNumbers);


// object 

let a = {
    name: "anamul",
    age: 25
}
let b = {
    name: "aiiol",
    age: 26
};
console.log({ ...a, ...b });



