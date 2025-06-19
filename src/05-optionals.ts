export const createProduct = (
	id: string | number,
	isNew?: boolean,
	stock?: number
) => {
	return {
		id,
		stock: stock ?? 10,  // es mejor usar el operador ?? que el ||, puesto que el || toma el valor 0,"" y false como false, en cambio el ?? toma el valor undefined y null como false y pasará a tomar el siguiente valor
		isNew: isNew ?? true,
	};
};

const p1 = createProduct(1, true, 12);
console.log(p1);

const p2 = createProduct(2, true);
console.log(p2);

const p3 = createProduct(3);
console.log(p3);

const p4 = createProduct(4, false, 0);
console.log(p4);


// -----------
const createProduct2 = (
	id: string | number,
	isNew: boolean = true, // Los valores por defecto también se pueden colocar aquí
	stock: number = 10
) => ({ id, stock, isNew });

const pp1 = createProduct2(1, true, 12);
console.log(pp1);
const pp2 = createProduct2(2);
console.log(pp2);
const pp3 = createProduct2(3, false, 0);
console.log(pp3);
