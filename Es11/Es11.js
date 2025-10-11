
//window.setTimeout(() => console.log("Hello"), 100); // work by browser 
//window.setTimeout(() => console.log("Hello"), 100); // work by node js

// the global this is not standardized before ES11. solution was

let setGlobal = function () {
    if (typeof window !== "undefined") { return window; }
    if (typeof global !== "undefined") { return global; }
    throw new Error("unable to locate global object");
};


let myGlobal = setGlobal();
myGlobal.setTimeout(() => console.log("Hello"), 100
);

// from es11 you can use globalThis


globalThis.setTimeout(() => console.log("Hello"), 100
);

































