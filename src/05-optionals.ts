export const createProduct = (
	id: string | number,
	isNew?: boolean,
	stock?: number
) => {
	return {
		id,
		stock: stock ?? 10,
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

const createProduct2 = (
	id: string | number,
	isNew: boolean = true,
	stock: number = 10
) => ({ id, stock, isNew });

const pp1 = createProduct2(1, true, 12);
console.log(pp1);
const pp2 = createProduct2(1);
console.log(pp2);
const pp3 = createProduct2(1, false, 0);
console.log(pp3);
