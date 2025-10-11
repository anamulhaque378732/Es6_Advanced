
const searchInput = document.querySelector(".search");
const display = document.querySelector(".result");
const thanks = document.querySelector(".thanks");
// normal function that work perfectly
// build in function a always arrow function dite hbe
// called bind is not work for arrow function



// function show() {
//     display.innerHTML = this.value;


//     setTimeout(() => {
//         thanks.innerHTML = `You have typed : ${this.value}`;
//     }, 1000);


// };

// arrow function a this change kore
// const show = () => {
//     display.innerHTML = this.value;
// }



//searchInput.addEventListener("keyup",show);

searchInput.addEventListener("keyup", function () {
    display.innerHTML = this.value;
});

// new keyword in not use fat arrow function

function Person(name) {
    this.name = this.name;
};

// var Person = (name) => {
//     this.name = name;
// }; // pabena 

var sakib = new Person('Sakib');


















