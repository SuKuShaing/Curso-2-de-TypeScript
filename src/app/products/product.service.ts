import { Product } from './product.model';
import { createProductDto, FindProductoDto, UpdateProductoDto } from './product.dto';
import { faker } from '@faker-js/faker';

export const products: Product[] = [];

// Método para añadir un producto
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

// Método para actualizar un producto
export const updateProduct = (id: string, changes: UpdateProductoDto): Product => {
	const index = products.findIndex((product) => product.id === id);
	if (index === -1) {
		throw new Error('Product not found');
	}
	products[index] = {
		...products[index],
		...changes,
	};
	return products[index];
};

// Método para buscar un producto
export const findProducts = (dto: FindProductoDto) : Product[] => {
	// code
	// dto.color = 'blue'; // ahora no se puede modificar los valores que envíen por ser readonly
	return products;
};