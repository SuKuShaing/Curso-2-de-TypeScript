import { addProduct } from "./products/product.service";

addProduct({
    id: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "Product 1",
    stock: 10,
    size: "S",
    category: {
        id: "1",
        name: "Category 1",
        createdAt: new Date(),
        updatedAt: new Date()
    },
});
