// function getTempPromise (location) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(79);
//             reject('City not found');
//         }, 1000);
//     });
// };

// getTempPromise('Philadelphia').then((temp) => {
//     console.log('promise success', temp);
// }, (err) => {
//     console.log('promise error', err)
// });

function addPromise (a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
            } else {
                reject('A and B need to be numbers');
            }
        }, 1000);
    });
};

addPromise(4, 5).then((add) => {
    console.log('promise success', add);
}, (err) => {
    console.log('promise error', err)
});

addPromise(4, '5').then((add) => {
    console.log('promise success', add);
}, (err) => {
    console.log('promise error', err)
});