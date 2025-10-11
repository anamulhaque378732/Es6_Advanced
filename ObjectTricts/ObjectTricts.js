//  important object method

let x = 4;
let y = 3;
let z = x * y;
let myObject = {
    name: "JAvascript",
    estd: 1995,
    founder: "Brendan eich",
    ranking: 1,
    x,
    yy: y,
    zz: z
};


let keys = Object.keys(myObject);
let value = Object.values(myObject);
let entries = Object.entries(myObject);
console.log(keys, value, entries);

















