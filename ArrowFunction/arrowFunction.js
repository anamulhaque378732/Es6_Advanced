
// Es6  gat arrow function
function number() {
    return 10;
};
// console.log(number());

let numbers = () => {
    return 10;
};


let num = () => 10;
let num2 = (n) => n;
let num3 = n => n;
let num4 = (n, m) => n + m;
let num5 = (n, m) => {
    // do something
    return n + m;

};


// arrow function does not change this property, but normaL function chagge this property
let javaS = {
    name: "JavaScript",
    libraries: ["react", "angular", "vue"],
    printLibraries: function () {
        //console.log(this);
        // const self = this;
        this.libraries.forEach((a) => {
            console.log(`${this.name} loves ${a}`);

        });
    },
};

javaS.printLibraries();
