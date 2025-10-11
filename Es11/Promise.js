
const promise1 = new Promise(resolve => resolve("Bruger"));

const promise2 = new Promise(-, reject => reject("Apple"));

const promise3 = new Promise(resolve => resolve("cake"));

Promise.all([promise1, promise2, promise3])
    .then(response => console.log(response))
    .catch(error => console.log(error))

Promise.allSettled([promise1, promise2, promise3]).then(response => console.log(response));



// string.prototype.matchAll

const mytext = "my favorite food madam lips";




