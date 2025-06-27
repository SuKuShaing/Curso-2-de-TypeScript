const numbers: ReadonlyArray<Number> = [1, 2, 3, 4, 5];

// numbers.push(6);
// numbers.pop();
// numbers.unshift(0);

// ReadonlyArray solo permite métodos que no modifiquen el array original
numbers.filter(()=>{});
numbers.map(()=>{});
numbers.reduce(()=>0);
numbers.forEach(()=>{});

// numbers.sort(()=>{});
// numbers.splice(0, 1);
