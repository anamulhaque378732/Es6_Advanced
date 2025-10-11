const arr1 = [1, 2, 3, 4, 5, 6];
const arr = [1, 2, 34, 5, 4];

const cars = [
    {
        type: "Volbo",
        year: 2016
    },
    {
        type: "Combo",
        year: 2015
    },
    {
        type: "Telbo",
        year: 2012
    },
    {
        type: "Chilbo",
        year: 2025
    },
    {
        type: "Kelbo",
        year: 2023
    },
]
//console.log(arr.sort(), arr1.sort()); //  sort alphabetically


// const compare = function (a, b) {
//     //
//     return b - a;
// };

//console.log(arr.sort(compare));
//console.log(arr1.sort(compare));

// const result = cars.sort(function (a, b) {
//     return a.year - b.year;
// });

// const result = cars.sort(function (a, b) {
//     const x = a.type.toLowerCase();
//     const y = b.type.toLowerCase();
//     if (x < y) {
//         return -1;
//     } else if (x > y) {
//         return 1;
//     } else {
//         return 0
//     }
// });
// const result = cars.sort(function (a, b) {
//     const x = a.type.toLowerCase();
//     const y = b.type.toLowerCase();
//     if (x < y) {
//         return 1;
//     } else if (x > y) {
//         return -1;
//     } else {
//         return 0
//     }
// });
const result = cars.toSorted(function (a, b) {
    const x = a.type.toLowerCase();
    const y = b.type.toLowerCase();
    if (x < y) {
        return 1;
    } else if (x > y) {
        return -1;
    } else {
        return 0
    }
});

console.log(result);

console.log(cars);




