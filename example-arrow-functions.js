// var names = ['Ramon', 'Maria', 'Elizabeth'];

// names.forEach(function(name) {
//     console.log('forEach', name);
// });

// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Ramon'));

function add (a, b) {
    return a + b;
}

var addStament = (a, b) => {
    return a + b;
};

var addExpression = (a, b) => a + b;

console.log(add(1, 3));
console.log(add(9, 0));

console.log(addStament(1, 4));
console.log(addStament(9, 1));