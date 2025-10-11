// matchAll

const text = 'My favorite color are #FFFFFFF and #000000 ';
const regex = /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g;

//const match = text.match(regex);
const matchALL = text.matchAll(regex);
for (let match of matchALL) {
    console.log(match);

}



































