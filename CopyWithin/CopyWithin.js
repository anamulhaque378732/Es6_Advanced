// CopyWithin(target,start,end)

//  target = require , must be assign

// start  = default(0) , or if you assign then your index

// End = default (Array.length), or if you assign index

// naver change array.length
//  overwrites original array
//  return modified array


const arr = ["Javascript", 'PHP', "Python", "Ruby", "C++", "Rust"];
//arr.copyWithin(3);
arr.copyWithin(-3, -2, -1)
console.log(arr);




















