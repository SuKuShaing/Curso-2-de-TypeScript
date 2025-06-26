import { addProduct, products } from './products/product.service';
import { faker } from '@faker-js/faker';

for (let index = 0; index < 50; index++) {
	addProduct({
		title: faker.commerce.productName(),
		stock: faker.number.int({ min: 10, max: 100 }),
        size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
		categoryId: faker.string.uuid(),
		image: faker.image.url(),
		description: faker.commerce.productDescription(),
		color: faker.color.rgb(),
		isNew: faker.datatype.boolean(),
		tags: faker.helpers.arrayElements(['tag1', 'tag2', 'tag3']),
		price: parseInt(faker.commerce.price(), 10),
	});
}

console.log(products);

