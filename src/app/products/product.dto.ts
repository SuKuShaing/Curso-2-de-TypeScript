import { Product } from "./product.model";

// DTO: Data Transfer Object
// omit (omitir) es para excluir ciertos campos, puesto que la base de datos los añadirá
// type createProductDto = Omit<Product, "id" | "createdAt" | "updatedAt" | "category">;

export interface createProductDto extends Omit<Product, "id" | "createdAt" | "updatedAt" | "category"> {
    categoryId: string;
}

// pick (elige) es para seleccionar solo ciertos campos
type example = Pick<Product, "title" | "description">;