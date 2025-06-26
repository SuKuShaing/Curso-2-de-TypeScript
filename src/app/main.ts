import { addProduct, products } from './products/product.service';
import { faker } from '@faker-js/faker';

for (let index = 0; index < 50; index++) {
	addProduct({
		id: faker.string.uuid(),
		title: faker.commerce.productName(),
		createdAt: faker.date.recent(),
		updatedAt: faker.date.recent(),
		stock: faker.number.int({ min: 10, max: 100 }),
        size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
		category: {
			id: faker.string.uuid(),
			name: faker.commerce.department(),
			createdAt: faker.date.recent(),
			updatedAt: faker.date.recent(),
		},
		image: faker.image.url(),
		description: faker.commerce.productDescription(),
		color: faker.color.rgb(),
		isNew: faker.datatype.boolean(),
		tags: faker.helpers.arrayElements(['tag1', 'tag2', 'tag3']),
		price: parseInt(faker.commerce.price(), 10),
	});
}

console.log(products);
