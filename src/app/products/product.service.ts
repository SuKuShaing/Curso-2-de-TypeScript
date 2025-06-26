import { Product } from './product.model';
import { createProductDto } from './product.dto';
import { faker } from '@faker-js/faker';

export const products: Product[] = [];

export const addProduct = (data: createProductDto): Product => {
	// data.id = "1"; // lanza error por ser readonly
	// data.createdAt = new Date(); // lanza error por ser readonly
	// data.updatedAt = new Date();

	// Esto lo hace la base de datos
	const newProduct: Product = {
		...data,
		id: faker.string.uuid(),
		createdAt: faker.date.recent(),
		updatedAt: faker.date.recent(),
		category: {
			id: faker.string.uuid(),
			name: faker.commerce.department(),
			createdAt: faker.date.recent(),
			updatedAt: faker.date.recent(),
		},
	};

	products.push(newProduct);

	return newProduct;
};

export const updateProduct = (id: string, changes: createProductDto) => {
	//code
};
