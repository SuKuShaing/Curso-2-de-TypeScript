// Array de números y strings
const prices: (number | string)[] = [1, 2, 3, 4, 5, "as"];
prices.push(1);
prices.push("otro texto");

console.log(prices);

// Tupla
// las tuplas son arrays con un número fijo de elementos y que están tipados según su posición
let user: [string, number, boolean] = ["Sukushaing", 32, true];
user = ["Seba", 22, false];
// user = ["12", 22]; 
console.log(user);

// user = []; // Error
// user = ["Seba"]; // Error
// user = ["Seba", 22];
user = ["Seba", 22, true];

// Desestructuración de tuplas
const [username, age] = user; // toma el primer y 2do valor

console.log(username);
console.log(age);

// Desestructuración de un Array
const [username2, age2] = prices; // toma el primer y 2do valor
console.log(username2);
console.log(age2);