// 1
// function sayHello() {
//     return "Hello, world!";
// }

// const sayHelloArrow = () => "Hello, world!";
// console.log(sayHelloArrow());

// 2
// function double(x) {
//     return x*2;
// }

// const doubleArrow = x => x*2
// console.log(doubleArrow(5));

// 3
// function add(x, y) {
//     return x + y;
// }

// const addArrow = (x, y) => x + y;
// console.log(addArrow(5, 2));

// 4
// const person = {
//     name: "Dung",
//     sayHi: function() {
//         return "Hi, " + this.name + "!";
//     }
// };

// const person = {
//     name: "Dung",
//     sayHiArrow: () => "Hi, " + person.name + "!"
// };
// console.log(person.sayHiArrow());

// 5
const numbers = [1, 2, 3, 4, 5, 6];

// const doubled = numbers.map(function(num) {
//     return num * 2;
// })

const doubledArrow = numbers.map(num => num * 2)
console.log(doubledArrow);