import { Product } from "./product.model";

export const products: Product[] = [];

export const addProduct = (data: Product) => {
    // data.id = "1"; // lanza error por ser readonly
    // data.createdAt = new Date(); // lanza error por ser readonly
    // data.updatedAt = new Date();
    products.push(data);
}