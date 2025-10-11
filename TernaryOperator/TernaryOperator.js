// ternary operator

let age = 15;
let type;

if (age >= 18) {
    type = "adult"
} else {
    type = "Child"
};

//let types = (age >= 18) ? "Adult" : "Child";

let types = (age >= 18) ? "Adult" : (age < 10) ? "Child" : "Young";
console.log(types);



let isLogin = true;
let access = isLogin ? true : false;

console.log(access);

let a = 8;
let num = a > 6
console.log(num);














