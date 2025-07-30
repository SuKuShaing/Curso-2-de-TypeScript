const numbers: ReadonlyArray<Number> = [1, 2, 3, 4, 5];

// ReadonlyArray solo permite métodos que no modifiquen el array original
numbers.filter(()=>{});
numbers.map(()=>{});
numbers.reduce(()=>0);
numbers.forEach(()=>{});
numbers.slice(0, 1); // entrega un extracto en un nuevo array

// No se puede usar porque modifica el array original
// numbers.push(6); 
// numbers.pop(); 
// numbers.unshift(0);
// numbers.sort(()=>{}); 
// numbers.splice(0, 1);

/*
Ejemplo de splice
const numbers = [1, 2, 3, 4, 5];
const removed = numbers.splice(1, 2); // elimina 2 elementos desde índice 1
console.log(numbers); // [1, 4, 5] - original modificado
console.log(removed); // [2, 3] - elementos eliminados

// Insertar elementos
numbers.splice(1, 0, 'a', 'b'); // inserta sin eliminar
console.log(numbers); // [1, 'a', 'b', 4, 5]
*/