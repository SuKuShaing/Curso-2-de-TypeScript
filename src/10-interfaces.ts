type Sizes = 'S' | 'M' | 'L' | 'XL';

// con Type se pueden definir tipos primitivos o directos
// los Type no se pueden extender
type userId = string | number; 
// type Producto = {
//     id: string | number;
//     title: string;
//     createdAt: Date;
//     stock: number;
//     size: Sizes;
// }

// una interface requiere un cuerpo (con llaves) para definirla
// las interfaces se pueden extender
// Las interfaces solo aplican a objetos
interface Product {
    id: string | number;
    title: string;
    createdAt: Date;
    stock: number;
    size: Sizes;
}

const products: Product[] = [];

products.push({
    id: "1",
    title: "Product 1",
    createdAt: new Date(),
    stock: 10,
    size: "S"
});

const addProduct = (data: Product) => {
    products.push(data);
}