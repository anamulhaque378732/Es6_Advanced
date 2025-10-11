// rest operator
// arguments => build in property

function myFunc(...params) {
    // console.log(a, b);
    console.log(arguments);
    console.log(a, params);


};
// rest operator must be last formal parameter

function myFunc(a, ...params) {
    // console.log(a, b);
    console.log(arguments);
    console.log(a, params);


};

myFunc(111, 1, 2, 3, 4, 5, 6, 7, 8, 9);


