// template literals

let a = 5;
let b = 6;
//console.log("I am " + a + " i am " + b);
//console.log(`i am ${a} i am  ${b}`);
//console.log(`i am  ${a + b}`);


// tag template literal

function modifier(strings, ...values) {
    const m = strings.reduce((prev, currentValue) => {
        return prev + currentValue + (values.length ? "Mr." + values.shift() : "")
    }, "");

    return m
};



let player1 = "Tamim";
let player2 = "Sakib";
let player3 = "Anamul";
let player4 = "Raihan";

console.log(modifier`We have ${player1}, ${player2} , ${player3} and ${player4} in our cricket team`);

































