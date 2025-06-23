import { addProduct } from "./products/product.service";

addProduct({
    id: "1",
    title: "Product 1",
    createdAt: new Date(),
    stock: 10,
    size: "S",
    category: {
        id: "1",
        name: "Category 1"
    }
});
