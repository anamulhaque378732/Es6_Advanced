

// Array.prototype.find() // main array change korena

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];



const number = numbers.find((currentValue, currentIndex, arr) => {
    return currentValue > 6
}, this)


console.log(number);

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    test() {
        console.log('hello');

    }

    exampleFunction() {
        let array = [1, 2, 3, 4, 5];
        array.find(() => {
            this.test()
        }, this)
    }

};
let student = new Student("Anamul", 24)
student.exampleFunction();











