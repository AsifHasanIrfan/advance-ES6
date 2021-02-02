// This is map uses in javascript //
const numbers = [3, 4, 7, 6, 7];
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

// const result = numbers.map(function square(element) {
//     return element * element;
// })

// const result = numbers.map(x => x * x);
// console.log(result);

// This is filter uses in javascript // 

const result = numbers.filter(x => x > 5);

const isThere = numbers.find(x => x > 5);


console.log(isThere);
