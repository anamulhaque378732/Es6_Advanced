// destructuring

const MyObject = {
    id: 25,
    name: "Anamul haque",
    age: 35,
    profession: "Developer",
    // education: {
    //     degree: "B.Sc",

    // }

};

//let name = MyObject.name;

let { name, age, profession } = MyObject;
let { education: { degree } = {} } = MyObject;
//let { education: { degree } } = MyObject;
//console.log(degree);

let myArray = [1, 2, 3, 4, 5, 6];
//let [a, b, c] = myArray;
//let [, a, , , b] = myArray
let [a, ...b] = myArray
// console.log(a, b);
let arr = [1, 2, 3, [500, 600, 200]];
let [, , , [, c, d]] = arr;

//console.log(c, d);

// 
let aa = 1;
let bb = 9;
// the old way;
// let cc = a;
// aa = bb;
// bb = cc;
//console.log(aa, bb, cc);

// present way

[b, a] = [aa, bb];

console.log(a, b);

