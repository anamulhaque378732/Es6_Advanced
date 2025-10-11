
const language = {
    creator: "Brendan Eich",
    library: {
        react: {
            company: "Facebook"
        },
    },

};
//console.log(language.library?.react?.company);

let colors = ["red", "green", "blue"];
//console.log(colors?.[1]);

// nullish Coalescing Operator

//let language2 = null;
//let language2 = NaN;
//let language2 = false;
//let language2 = 0;
let language2 = "";
console.log(language2 ?? "Javascript"); // Javascript
console.log(language2 || "Javascript"); // Javascript



