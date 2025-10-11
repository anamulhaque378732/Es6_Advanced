
function log(anything) {
    console.log(anything);

};

//let myArray = [];//literal syntax
//let myArray1 = new Array(); // constructor syntax
//myArray[0] = 5;



///// sets reference
//let mySet = new Set();

//mySet.add(5).add(6).clear();
//mySet.add(5).add(6);
//log(mySet.size);


//mySet.add("Bangladesh");
//mySet.delete("Bangladesh");
//console.log(mySet.has("Bangladesh"));


//log(mySet)

//////  convert array to set

// let myArray22 = [4, 5, 6, 7, 8, 9];
// let mySet = new Set(myArray22);
//let mySet = new Set("bangladesh");
// for (let value of mySet) {
//     console.log(value);

// };


//////convert set to array

// let myArray = [1, 2, 3, 4, 5, 6];
// let mySet = new Set(myArray);

// log([...mySet])
// console.log(Array.from(mySet));

///// use case of set


let myArray = [4, 5, 6, 7, 8, 9];
let mySet = new Set(myArray);
mySet.add(5) // don't add same number

// console.log(mySet);

let Arr = [1, 1, 1, 2, 3, 4, 5, 5, 5, 6, 6, 6, 8, 7, 8, 9];
//log([...new Set(Arr)]);

let a = new Set([1, 2, 6, 6, 7, 3]);
let b = new Set([4, 5, 6, 7, 7, 6]);
let union = new Set([...a, ...b]);
//log(union)
let intersection = new Set([...a].filter(x => b.has(x)));

//log(intersection);

let difference = new Set([...a].filter(x => !b.has(x)));

//log(difference);



///////  weakSet obviously add object

const ws = new WeakSet([{ b: 1 }, { bn: 3 }]);
//ws.add({ a: "bangladesh" });


//log(ws);

const wss = new WeakSet([{ b: 1 }, { bn: 3 }]);

class SomeClass {
    constructor() {
        wss.add(this)
    };
    method() {
        if (!wss.has(this)) {
            throw new Error("You can not access this method directly")
        }
        else {
            return "I am method";
        }
    };
};

const aa = new SomeClass();
log(aa.method())

//log(SomeClass.prototype.method());









